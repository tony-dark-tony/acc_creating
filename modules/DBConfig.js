const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "urlone_office365",
  "urlone_office365",
  "@Ann123456789",
  {
    host: "45.122.222.221",
    port: "3306",
    dialect: "mysql",
  }
);
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const Reseller = sequelize.define("Reseller", {
  parent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  domains: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
const License = sequelize.define("License", {
  domain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  license: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
const Account = sequelize.define("Account", {
  createUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
const Token = sequelize.define("Token", {
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    count: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domain: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
const Domain = sequelize.define("Domain", {
  domain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})
//sequelize.sync();
module.exports = {
    Reseller: Reseller,
    License: License,
    Account: Account,
    Token: Token,
    Domain: Domain,
}