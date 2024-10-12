export const validateLogin = (input) => {
  const errors = {};

  // Validación para el nombre de usuario
  if (!input.credentialsId.username) {
    errors.username = 'Username is required';
  } else if (!/^[a-z0-9_]+$/.test(input.credentialsId.username)) {
    errors.username =
      'Username is invalid. Only lowercase letters, numbers, and underscores are allowed';
  }

  // Validación para la contraseña
  if (!input.credentialsId?.password) {
    errors.password = 'Password is required';
  } else if (input.credentialsId.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?])/.test(
      input.credentialsId.password,
    )
  ) {
    errors.password =
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
  }

  return errors;
};
