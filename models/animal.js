module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('Animal', {
        Name: Sequelize.DataTypes.STRING,
        Species: Sequelize.DataTypes.STRING,
        Birthday: Sequelize.DataTypes.DATE
    },{
        timestamps: false
    });
	return Animal
}