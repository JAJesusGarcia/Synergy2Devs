export const validate = (input) => {
  const errors = {};

  // Validación para el nombre
  if (!input.name) {
    errors.name = 'Name is required';
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(input.name)) {
    errors.name = 'Name is invalid';
  }

  // Validación para el apellido
  if (!input.lastName) {
    errors.lastName = 'Last name is required';
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(input.lastName)) {
    errors.lastName = 'Last name is invalid';
  }

  // Validación para la fecha de nacimiento
  if (!input.birthdate) {
    errors.birthdate = 'Birthdate is required';
  } else if (new Date(input.birthdate) > new Date()) {
    errors.birthdate = 'Birthdate cannot be in the future';
  }

  // Validación para el DNI
  const dniValidate = /^\d{7,8}$/; // Acepta DNIs de 7 u 8 dígitos
  if (!input.nDni) {
    errors.nDni = 'DNI is required';
  } else if (!dniValidate.test(input.nDni)) {
    errors.nDni = 'DNI is invalid';
  }

  // Validación para el número de teléfono
  const phoneValidate = /^\d{10,15}$/; // Acepta números de teléfono de 10 a 15 dígitos
  if (!input.numberPhone) {
    errors.numberPhone = 'Phone number is required';
  } else if (!phoneValidate.test(input.numberPhone)) {
    errors.numberPhone = 'Phone number is invalid';
  }

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

  // Otros campos pueden ser validados aquí
  if (!input.name) {
    errors.name = 'Name is required';
  }
  if (!input.lastName) {
    errors.lastName = 'Last Name is required';
  }
  if (!input.email) {
    errors.email = 'Email is required';
  }
  if (!input.birthdate) {
    errors.birthdate = 'Birthdate is required';
  }
  if (!input.nDni) {
    errors.nDni = 'DNI is required';
  }
  if (!input.numberPhone) {
    errors.numberPhone = 'Phone Number is required';
  }

  return errors;
};
