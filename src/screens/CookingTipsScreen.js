// External dependencies
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';

// Local data
import COOKING_TIPS, { MAX_TIPS } from '../data/cookingTipsData';

// Styles
import styles from '../styles/CookingTipsStyles';

// Auto-rotation interval constant
const ROTATION_INTERVAL_MS = 5000;

const CookingTipsScreen = () => {
  // useState: tracks which tip is currently displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // useState: holds the full tips array from data file
  const [tips] = useState(COOKING_TIPS);

  // useState: informative message showing current tip position
  const [progressMessage, setProgressMessage] = useState('');

  // Animated value for fade transition between tips
  const [fadeAnim] = useState(new Animated.Value(1));

  // Helper: runs a fade out then fade in animation
  const animateTipChange = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // useEffect with empty array [] + cleanup function:
  // creates an interval that auto-rotates tips every 5 seconds
  // returns clearInterval to avoid memory leaks on unmount
  useEffect(() => {
    const intervalId = setInterval(() => {
      animateTipChange();
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, ROTATION_INTERVAL_MS);

    // Cleanup: runs when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect with dependency [currentIndex]:
  // updates the progress message every time the tip changes
  useEffect(() => {
    setProgressMessage(`Tip ${currentIndex + 1} de ${MAX_TIPS}`);
    console.log(`Now showing tip ${currentIndex + 1}`);
  }, [currentIndex]);

  // Manual advance to the next tip
  const handleNextTip = () => {
    animateTipChange();
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  const currentTip = tips[currentIndex];

  return (
    <SafeAreaView style={styles.container}>

      {/* Progress indicator: "Tip X de 10" + dot indicators */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{progressMessage}</Text>
        <View style={styles.dotsRow}>
          {tips.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Tip card with fade animation - opacity controlled by fadeAnim */}
      <Animated.View style={[styles.tipCard, { opacity: fadeAnim }]}>
        <Text style={styles.tipEmoji}>{currentTip.emoji}</Text>
        <View style={styles.categoryTag}>
          <Text style={styles.categoryTagText}>{currentTip.category}</Text>
        </View>
        <Text style={styles.tipTitle}>{currentTip.title}</Text>
        <Text style={styles.tipText}>{currentTip.tip}</Text>
      </Animated.View>

      {/* Auto-rotation info label */}
      <View style={styles.autoRotateInfo}>
        <Text style={styles.autoRotateText}>
          ⏱️ Cambia automáticamente cada 5 segundos
        </Text>
      </View>

      {/* Manual next button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextTip}
        activeOpacity={0.85}
      >
        <Text style={styles.nextButtonText}>Siguiente tip →</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default CookingTipsScreen;