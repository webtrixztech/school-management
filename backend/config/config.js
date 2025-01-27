const config = {
  studentPayments: {
    REFRESH_TOKEN: process.env.PAYMENT1_REFRESH_TOKEN || "1000.8c05711112babf6f9da66d4c8aff5475.1ba8d886256e73d634f1638686fd71af",
    CLIENT_ID: process.env.PAYMENT1_CLIENT_ID || "1000.SXS2T8YXTTBCKH1T0CBNFDDU10KH7V",
    CLIENT_SECRET: process.env.PAYMENT1_CLIENT_SECRET || "bb7bf100fe2a90123506b60cf77434d95b691592ec",
    API: process.env.PAYMENT1_API || "https://payments.zoho.in/api/v1/paymentsessions?account_id=60034516384",
  },
  schoolPayments: {
    REFRESH_TOKEN: process.env.PAYMENT2_REFRESH_TOKEN || "1000.4582bfa32acd882da8a34daed081ad0f.81cfdbf5f149d50be44b70cdb16ca0f1",
    CLIENT_ID: process.env.PAYMENT2_CLIENT_ID || "1000.FTS6LQWHAI6VCHP67WSH71HZBW091I",
    CLIENT_SECRET: process.env.PAYMENT2_CLIENT_SECRET || "355528be04b59595a5f5c471f732212ee77d5b6e52",
    API: process.env.PAYMENT2_API || "https://payments.zoho.in/api/v1/paymentsessions?account_id=60034736461",
  },
};

module.exports = config;
