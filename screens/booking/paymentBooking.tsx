import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '@/types/types';

type PaymentScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "PaymentBooking">;

const PaymentSuccessPage: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation<PaymentScreenNavigationProp>();

  const {
    bookingCode,
    amount,
    playfieldName,
    buyerName,
    buyerPhone,
    dateStart,
    time,
    location,
  } = route.params || {};

  const orderDetails = {
    invoiceNumber: bookingCode,  // Sử dụng bookingCode làm invoice number
    paymentMethod: "Chuyển khoản",
    paymentDate: new Date().toLocaleDateString(), // Lấy ngày thanh toán hiện tại
    paymentTime: new Date().toLocaleTimeString(), // Lấy thời gian thanh toán hiện tại
    amountPaid: `${amount} VND`,
    status: "Successful",
    playfieldName: playfieldName,
    address: location,
    timeSlot: time,
    dateStart: dateStart,
    time: time,
    buyerName: buyerName,
    buyerPhone: buyerPhone,
  };

  const orderDetailsString = JSON.stringify(orderDetails);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5290/5290058.png' }}
        style={styles.checkmark}
      />
      <Text style={styles.successText}>Your payment was successful!</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Invoice Number:</Text>
          <Text style={styles.value}>{orderDetails.invoiceNumber}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Amount Paid:</Text>
          <Text style={styles.value}>{orderDetails.amountPaid}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{orderDetails.status}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{orderDetails.address}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Payment Date:</Text>
          <Text style={styles.value}>{orderDetails.paymentDate}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Payment Time:</Text>
          <Text style={styles.value}>{orderDetails.paymentTime}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Playfield:</Text>
          <Text style={styles.value}>{orderDetails.playfieldName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{orderDetails.buyerName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>{orderDetails.buyerPhone}</Text>
        </View>
      </View>

      <SvgQRCode value={orderDetailsString} size={150} />

      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.navigate('MyHistory', {
          bookings: [
            {
              invoiceNumber: bookingCode,
              playfieldName,
              location,
              time: time,
              status: 'Not yet',
              price: amount,
              dateStart: dateStart,
              buyerName,
              buyerPhone,
            },
          ],
        })
        }>
        <Text style={styles.returnButtonText}>My Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.returnButton}
        onPress={() => navigation.navigate('(tabs)')}>
        <Text style={styles.returnButtonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40
  },
  checkmark: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    paddingHorizontal: 15
  },
  returnButton: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentSuccessPage;
