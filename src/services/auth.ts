import * as Keychain from 'react-native-keychain';
import * as Biometrics from 'react-native-biometrics';

export const secureStorage = {
  set: async (key: string, value: string) => {
    await Keychain.setGenericPassword(key, value, {
      service: key,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  },

  get: async (key: string) => {
    const result = await Keychain.getGenericPassword({ service: key });
    return result ? result.password : null;
  },
};

export const biometricAuth = async () => {
  const { available } = await Biometrics.isSensorAvailable();
  if (!available) return false;

  const result = await Biometrics.simplePrompt({
    promptMessage: 'Authenticate to continue',
  });
  
  return result.success;
};