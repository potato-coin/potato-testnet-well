var Binaryen = require("binaryen");

var config = function() {
  this.logFormat = "combined";
  this.provider = {
    chainId: null,
    keyProvider: [
      "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
      "5KdC5izmPV6WkY4afTdzzcyx5dyQ2z6Ax9tDCSqFwGBA5twQogz",
      "5K63ZFMhZVVzvDiVWuNxmznGGzb4JjeKr53j1uYga1zhkBxTELQ",
      "5JXgXUpAhYbu6Smf9vZiKnYjGmxfGh2BkZCQZAPLv9DzFkAnu9S",
      "5JhsjUjKUJXYSvPWAZe23ceNSMdjk9U32jjmgFTZfXxe4yV2y4A",
      "5J31hi73ZfRDJv1MTVoqdGPh4J9e8Nzt5szdxn6zLrUnwGwyd2j",
      "5KAwYrRVxRToSmwLpp7MexoFbnzmRSiJkPP8eYYq2ZfV2r9dY6y",
      "5JpSUc2Kh9ZAg7H96nuNT4DbKhsngV8yVjr1Gyfe71LuHtEq9YY",
      "5K463ynhZoCDDa4RDcr63cUwWLTnKqmdcoTKTHBjqoKfv4u5V7p",
      "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr",
      "5JUNYmkJ5wVmtVY8x9A1KKzYe9UWLZ4Fq1hzGZxfwfzJB8jkw6u",
      "5K6LU8aVpBq9vJsnpCvaHCcyYwzPPKXfDdyefYyAMMs3Qy42fUr",
      "5KdRpt1juJfbPEryZsQYxyNxSTkXTdqEiL4Yx9cAjdgApt4ANce",
      "5JRMbcnc35NkvxKTZUnoe3W4ENQCjhMUFwjN5jQmAqN9D7N6y3N",
      "5HqyipkJSm5fwYhbhGC3vmmoBwabtgJSPecnvmN2mMrCTQfWBSS",
      "5KPr55J2UQNUh3xP5Q6ebqqV6MK5usrXxG4qqRfpaLieGa8VpCm",
      "5JV9UNEpPKa4sqxSxvGWYPY9ZBTzAttyq7ShPvLUJSetwAeSXFW",
      "5K4GSGP2r1Yu3RqmPZPF8Hv6Zrv2YWsUEoCqwwHxKsZavz2tChg",
      "5K4MmsY7Th8DqjEY2vbM7npaxSQ56XzvNULkJeqKmbYoVRmPPpB",
      "5KLGj1HGRWbk5xNmoKfrcrQHXvcVJBPdAckoiJgFftXSJjLPp7b",
      "5K6qk1KaCYYWX86UhAfUsbMwhGPUqrqHrZEQDjs9ekP5j6LgHUu",
      "5JCStvbRgUZ6hjyfUiUaxt5iU3HP6zC1kwx3W7SweaEGvs4EPfQ",
      "5JJjaKnAb9KM2vkkJDgrYXoeUEdGgWtB5WK1a38wrmKnS3KtkS6",
      "5K7hmHA2U3nNpwGx6AffWsHyvsSMJvVKVmSgxnSYAjAvjUfzd5j",
      "5K3TXkZAwyJkg7TjSfopd7sTr3RXFccghXHN1nJHTzap1ZKgLdK",
      "5J498VQKaFVbh2ovPrMxa5DThE1fiWWfna6H2ZofmGMaVM7bs2M",
      "5JrC4vnVXroqvXtmSw3EiXcSv9agfDsKsUghzv2Rhiyrg9J36Z4"
    ],
    httpEndpoint: "https://potato.potatocoin.com",
    //httpEndpoint:'http://202.46.36.57:8888',
    //httpEndpoint:'http://192.168.1.198:8888',
    // httpEndpoint: 'http://192.168.1.2:8888',
    // httpEndpoint:'http://112.74.202.161:8888',
    binaryen: Binaryen,
    mockTransactions: "pass",
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true
  };
  this.bootstrapUrl =
    "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  // this.names = {
  //     "0x007733a1fe69cf3f2cf989f81c7b4cac1693387a": "POA-Digix",
  //     "0x00e4a10650e5a6d6001c38ff8e64f97016a1645c": "POA-Aurel",
  //     "0x00e6d2b931f55a3f1701c7389d592a7778897879": "POA-Maker",
  //     "0x0010f94b296a852aaac52ea6c5ac72e03afd032d": "POA-Paritytech",
  //     "0x0020ee4be0e2027d76603cb751ee069519ba81a1": "POA-Melonport",
  //     "0x4ed9b08e6354c70fe6f8cb0411b0d3246b424d6c": "POA-OneBit",
  //     "0x00d6cc1ba9cf89bd2e58009741f4f7325badc0ed": "POA-Etherscan",
  //     "0x00a0a24b9f0e5ec7aa4c7389b8302fd0123194de": "POA-GridS",
  //     "0x00427feae2419c15b89d1c21af10d1b6650a4d3d": "POA-Attores"
  //   }
};

module.exports = config;
