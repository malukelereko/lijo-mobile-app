import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ConfettiCannon from 'react-native-confetti-cannon';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeableRow from '@/components/SwipeableRow';
import useBasketStore from '@/store/basketStore';
import { Feather, Ionicons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from '@/components/BottomSheet';

const basket = () => {

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
    console.log("Modal")
  }

  const { products, total, clearCart, reduceProduct, addProduct } = useBasketStore();
  const [order, setOrder] = useState(false);


  const FEES = {
    service: 2.99,
    delivery: 5.99,
  };

  const startCheckout = () => {
    setOrder(true);
    clearCart();
  };

  return (
    <>
      {order && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fallSpeed={2500} fadeOut={true} autoStart={true} />}
      {order && (
        <View style={{ marginTop: '50%', padding: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Thank you for your order!</Text>
          <Link href={'/'} asChild>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.footerText}>New order</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      {!order && (
        <>
          <BottomSheet ref={bottomSheetRef} />
          <View style={styles.card}>
            <Text style={styles.p}>
              Deliver to
            </Text>
            <TouchableOpacity onPress={openModal}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.title}>
                  Seapoint Maseru, Lesotho
                </Text>

                <Ionicons name='chevron-down' size={24}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            ListHeaderComponent={<Text style={styles.section}>Items</Text>}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: Colors.grey }} />}
            renderItem={({ item }) => (
              <SwipeableRow onDelete={() => reduceProduct(item)}>
                <View style={styles.row}>
                  <Image source={item.img} style={styles.itemImg}/>
                  <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10}}>
                    <Text style={{ flex: 1, fontSize: 18 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: Colors.lightGrey, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10}}>
                      
                      <TouchableOpacity onPress={() =>reduceProduct(item)}>
                        <Feather name='minus'/>
                      </TouchableOpacity>
                      <Text style={{ color: Colors.primary, fontSize: 18 }}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() =>addProduct(item)}>
                        <Feather name='plus'/>
                      </TouchableOpacity>
                      
                    </View>
                    
                  </View>
                  
                  <Text style={{ fontSize: 18 }}>${item.price * item.quantity}</Text>
                </View>
              </SwipeableRow>
            )}
            ListFooterComponent={
              <View>
                <View style={{ height: 1, backgroundColor: Colors.grey }}></View>
                <View style={styles.totalRow}>
                  <Text style={styles.total}>Subtotal</Text>
                  <Text style={{ fontSize: 18 }}>LSL {total}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Service fee</Text>
                  <Text style={{ fontSize: 18 }}>LSL {FEES.service}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Delivery fee</Text>
                  <Text style={{ fontSize: 18 }}>LSL {FEES.delivery}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Total</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>LSL {(total + FEES.service + FEES.delivery).toFixed(2)}</Text>
                </View>
              </View>
            }
          />

          <View style={styles.footer}>
            <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
              <TouchableOpacity style={styles.fullButton} onPress={startCheckout}>
                <Text style={styles.footerText}>Order now</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </>
      )}
    </>
  )
}

export default basket

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20
  },

  p: {

  },

  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    color: Colors.medium,
    fontWeight: '600'
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },

  itemImg: {
    height: 60,
    width: 60,
    borderRadius: 10
  },
});