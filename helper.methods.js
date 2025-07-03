class Helpers {
    // Фільтруємо користувачів за віком
    getUsersByAge(response, ageMin, ageMax) {
        return response.users.filter(user =>
            user.age >= ageMin && user.age <= ageMax
        ).map(user => user.name);
    }

    // Фільтруємо користувачів за роллю
    getUsersByRole(response, role) {
        return response.users.filter(user =>
            user.role === role
        ).map(user => user.name);
    }

    // Фільтруємо користувачів за країною
    getUsersByCountry(response, country) {
        return response.users.filter(user =>
            user.country === country
        ).map(user => user.name);
    }

    // Фільтруємо користувачів за балансом
    getUsersByBalance(response, minBalance, maxBalance) {
        return response.users.filter(user =>
            user.balance >= minBalance && user.balance <= maxBalance
        ).map(user => user.name);
    }
}

// Експортуємо готовий об’єкт класу
export default new Helpers();