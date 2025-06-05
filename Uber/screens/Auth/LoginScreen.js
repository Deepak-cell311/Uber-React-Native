import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRouter } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import { useAuth } from '../../AuthContext/AuthContext';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

export default function Login({ setUser }) {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { logIn } = useAuth();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = Strings.errors.emailRequired;
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = Strings.errors.invalidEmail;
      isValid = false;
    }

    if (!password) {
      newErrors.password = Strings.errors.passwordRequired;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    setLoginError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://192.168.139.125:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setLoginError(data.message || "Login failed");
      } else {
        await logIn(data);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Login Successful',
          textBody: 'You have been logged out.',
        });
        console.log("Login successfully");

      }
    } catch (error) {
      setLoginError("Network error. Try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>


          <View style={styles.signupSection}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formSection}>
            {loginError ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>{loginError}</Text>
              </View>
            ) : null}

            <View style={styles.bar}></View>

            <View>
              <Text style={{ textAlign: "center", color: "white", fontSize: 30, marginBottom: 5 }}>Welcome Back</Text>
              <Text style={{ textAlign: "center", color: "white", fontSize: 15, marginBottom: 21 }}>Enter detail below</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="example@email.com*"
                placeholderTextColor={Colors.gray}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  placeholderTextColor={Colors.gray}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff color={Colors.gray} size={20} />
                  ) : (
                    <Eye color={Colors.gray} size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone no.*"
                placeholderTextColor={Colors.gray}
                keyboardType="number"
                autoCapitalize="none"
                value={phone}
                onChangeText={setPhone}
              />
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color={Colors.white} />
              ) : (
                <Text style={styles.loginButtonText}>Sign in</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/forgot-password')}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={{ textAlign: "center", color: "#333333", fontSize: 15, marginBottom: 5, width: "100" }}>Or sign in with</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google Sign-In')}>
              <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: 226,
                margin: "auto",
                padding: 5,
                borderRadius: 7,
              }}>
                <Image source={require("../../assets/google.webp")} style={{
                  height: 33,
                  marginTop: 4,
                  width: 33
                }} />
                <Text style={{ color: "black", fontSize: 17, fontWeight: 500, marginLeft: 10 }}>Sign In With Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.black,
    marginLeft: 24,
  },
  signupSection: {
    backgroundColor: Colors.white,
    paddingVertical: 32,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  signupText: {
    fontFamily: 'Inter-Regular',
    color: Colors.black,
    fontSize: 20,
  },
  signupLink: {
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    fontSize: 20,
    marginLeft: 4,
    backgroundColor: "#e6b800",
    padding: 10,
    borderRadius: 10
  },
  formSection: {
    backgroundColor: Colors.black,
    flex: 1,
    padding: 24,
  },
  errorContainer: {
    backgroundColor: Colors.error.light,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorMessage: {
    fontFamily: 'Inter-Medium',
    color: Colors.error.contrast,
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.white,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Inter-Regular',
    backgroundColor: Colors.white,
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.black,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    height: 56,
  },
  passwordInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.black,
  },
  eyeIcon: {
    padding: 16,
  },
  errorText: {
    fontFamily: 'Inter-Regular',
    color: Colors.error.main,
    fontSize: 12,
    marginTop: 4,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 10,
  },
  loginButtonText: {
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    fontSize: 16,
  },
  forgotPasswordText: {
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 10
  },
  bar: {
    backgroundColor: Colors.white,
    height: 10,
    width: 55,
    margin: "auto",
    marginTop: 0,
    marginBottom: 30,
    borderRadius: 9
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    color: "white"
  },

});
