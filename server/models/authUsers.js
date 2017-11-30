var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('AuthUsers', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
          firstName: {type:Sequelize.STRING},
          lastName: {type:Sequelize.STRING},
          email: {
            type:Sequelize.STRING,
            unique: true
          },
          username: {
             type:Sequelize.STRING,
             unique: true
          },
          password: {type:Sequelize.STRING},
          // Timestamps
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
      });
}
