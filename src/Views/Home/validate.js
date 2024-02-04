export const validateLoginForm = (formData) => {
    const errors = {
      username: [],
      password: [],
    };
  
    const usernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (formData.username.length < 5) {
      errors.username.push("Username must be at least 5 characters");
    }
    if (!formData.username.includes("@")) {
      errors.username.push("Username must contain @");
    }
    if (!formData.username.endsWith(".com")) {
      errors.username.push('Username must end in .com');
    }
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  
    if (!passwordRegex.test(formData.password)) {
      if (formData.password.length < 8) {
        errors.password.push("Password must be at least 8 characters long");
      }
  
      if (!/(?=.*[A-Z])/.test(formData.password)) {
        errors.password.push("Password must contain at least 1 capital letter");
      }
  
      if (!/(?=.*[0-9])/.test(formData.password)) {
        errors.password.push("Password must contain at least 1 number");
      }
    }
  
    return errors;
  };
  