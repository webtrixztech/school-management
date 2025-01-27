const config = {
  studentPayments: {
    REFRESH_TOKEN: process.env.PAYMENT1_REFRESH_TOKEN || "1000.c30cc6995509e4068b4e6d74f14ec883.2853fff464ccdd9c4f607a3e4131698f",
    CLIENT_ID: process.env.PAYMENT1_CLIENT_ID || "1000.SXS2T8YXTTBCKH1T0CBNFDDU10KH7V",
    CLIENT_SECRET: process.env.PAYMENT1_CLIENT_SECRET || "bb7bf100fe2a90123506b60cf77434d95b691592ec",
    API: process.env.PAYMENT1_API || "https://payments.zoho.in/api/v1/paymentsessions?account_id=60034516384",
  },
  schoolPayments: {
    REFRESH_TOKEN: process.env.PAYMENT2_REFRESH_TOKEN || "1000.8ae916e6b80996f64cc49b99e362c6b1.4edebf32ccb2e3ee5f614612c9a6bbfb",
    CLIENT_ID: process.env.PAYMENT2_CLIENT_ID || "1000.FTS6LQWHAI6VCHP67WSH71HZBW091I",
    CLIENT_SECRET: process.env.PAYMENT2_CLIENT_SECRET || "355528be04b59595a5f5c471f732212ee77d5b6e52",
    API: process.env.PAYMENT2_API || "https://payments.zoho.in/api/v1/paymentsessions?account_id=60034736461",
  },
};

module.exports = config;
