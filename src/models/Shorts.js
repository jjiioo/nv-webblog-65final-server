module.exports = (sequelize, DataTypes) => {
    const Shorts = sequelize.define('Shorts', {
      nameShorts: DataTypes.STRING,
      priceShorts: DataTypes.STRING
      
      
      
    })
    return Shorts
}