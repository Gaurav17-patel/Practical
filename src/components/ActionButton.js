import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActionButton = ({icon, color, onPress, count}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <Icon name={icon} size={32} color={color} />
      {count && <Text style={styles.actionText}>{count}</Text>}
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    marginVertical: 8,
  },
  actionText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 3,
  },
});
