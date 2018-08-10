const {
    ROLE_CUSTOMER
} = require('../config/role');

module.exports = app => {
    const {
        INTEGER,
        STRING,
        DATE,
        UUID,
        UUIDV4
    } = app.Sequelize;

    const UserModel = app.model.define('user', {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: STRING(50),
            allowNull: false,
        },
        email: {
            type: STRING(50),
            allowNull: true,
        },
        depart: {
            type: STRING(20),
            allowNull: false
        },
        sex: {
            type: STRING(10),
            allowNull: false,
            defaultValue: "neutral"
        },
        rank: {
            type: INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        role: {
            type: INTEGER(4),
            allowNull: false,
            defaultValue: ROLE_CUSTOMER,
        },
        createTime: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        updateTime: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        reading: {
            type: INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        readTime: {
            type: INTEGER(50),
            allowNull: false,
            defaultValue: 0
        },
        breach: {
            type: INTEGER(5),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        tablseName: 'user',
    });

    UserModel.beforeBulkUpdate(user => {
        user.attributes.updateTime = new Date();
        return user;
    });


    return UserModel;
};