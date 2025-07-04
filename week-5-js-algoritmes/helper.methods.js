const helperMethods = {
  getUsersByAge(data, minAge, maxAge) {
    return data
      .filter(user => user.age >= minAge && user.age <= maxAge)
      .map(user => user.name);
  },

  getUsersByRole(data, role) {
    return data
      .filter(user => user.role === role)
      .map(user => user.name);
  },

  getUsersByCountry(data, country) {
    return data
      .filter(user => user.country === country)
      .map(user => user.name);
  },

  getUsersByBalance(data, minBalance, maxBalance) {
    return data
      .filter(user => user.balance >= minBalance && user.balance <= maxBalance)
      .map(user => user.name);
  }
};

export default helperMethods;