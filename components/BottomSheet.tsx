import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useMemo, useCallback, forwardRef } from 'react'
import { BottomSheetModal, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import useBasketStore from '@/store/basketStore';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {

    const { deliveryMethod, setDeliveryMethod } = useBasketStore();

    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);
    const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
        handleIndicatorStyle={{ display: 'none' }}
        backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
        overDragResistanceFactor={0}
        snapPoints={snapPoints}
        ref={ref}
        backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={deliveryMethod === 'delivery' ? styles.toggleActive : styles.toggleInactive}
            onPress={() => setDeliveryMethod('delivery')}
          >
            <Text style={deliveryMethod === 'delivery' ? styles.activeText : styles.inactiveText}>
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={deliveryMethod === 'pickup' ? styles.toggleActive : styles.toggleInactive}
            onPress={() => setDeliveryMethod('pickup')}
          >
            <Text style={deliveryMethod === 'pickup' ? styles.activeText : styles.inactiveText}>
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>Your Location</Text>
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="location-outline" size={20} color={Colors.medium} />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>Arrival time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  )
});

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
    },
    toggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
      marginBottom: 32,
    },
    toggleActive: {
      backgroundColor: Colors.primary,
      padding: 8,
      borderRadius: 32,
      paddingHorizontal: 30,
    },
    activeText: {
      color: '#fff',
      fontWeight: '700',
    },
    toggleInactive: {
      backgroundColor: Colors.lightGrey,
      padding: 8,
      borderRadius: 32,
      paddingHorizontal: 30,
    },
    inactiveText: {
      color: Colors.primary,
    },
    button: {
      backgroundColor: Colors.primary,
      padding: 16,
      margin: 16,
      borderRadius: 4,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    subheader: {
      fontSize: 16,
      fontWeight: '600',
      margin: 16,
    },
    item: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 16,
      borderColor: Colors.grey,
      borderWidth: 1,
    },
  });

export default BottomSheet