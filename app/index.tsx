import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You may need to install this package

export default function ProfilePage() {
  return (
    <ImageBackground
      source={{ uri: '../assets/images/background1.jpg' }} // Replace with your uploaded image path
      style={styles.background}
    >
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: '../assets/images/user.jpg' }} // Replace with your profile image URL
          style={styles.profileImage}
        />
      </View>

      {/* Follower and Name Info */}
      <Text style={styles.followers}>Followers: 12,000</Text>
      <Text style={styles.username}>Gwynnever Tutor</Text>
      <Text style={styles.subtitle}>Tiktok streamer</Text>

      {/* Roles */}
      <View style={styles.rolesContainer}>
        {["Photographer", "Gamer", "Writer"].map((role, index) => (
          <View key={index} style={styles.roleBadge}>
            <Text style={styles.roleText}>{role}</Text>
          </View>
        ))}
      </View>

      {/* About Me Section */}
      <Text style={styles.aboutTitle}>About Me</Text>
      <View style={styles.aboutContainer}>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Age</Text>
          <Text style={styles.aboutValue}>21</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Location</Text>
          <Text style={styles.aboutValue}>CDO</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Hobby</Text>
          <Text style={styles.aboutValue}>Reading</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Height</Text>
          <Text style={styles.aboutValue}>130cm</Text>
        </View>
      </View>

      {/* Social Links */}
      <View style={styles.socialLinks}>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the screen
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    marginTop: 50,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileImage: {
    width: 200,
    height: 200,
  },
  followers: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
  rolesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 15,
  },
  roleBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent background
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  roleText: {
    fontSize: 14,
    color: 'black',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  aboutContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  aboutItem: {
    alignItems: 'center',
    width: '45%',
    marginVertical: 10,
  },
  aboutLabel: {
    fontSize: 14,
    color: 'black',
  },
  aboutValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});