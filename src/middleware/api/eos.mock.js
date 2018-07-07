class EosMock {
  static blockZeroActions = {
    timestamp: '2018-07-06T18:25:55.000',
    producer: 'starteosiobp',
    confirmed: 0,
    previous:
      '0044c328355945beffbc521898348d917b88752e1be5e33d3c6405591d23169f',
    transaction_mroot:
      '0000000000000000000000000000000000000000000000000000000000000000',
    action_mroot:
      '6c9ea12dd0cb5976f2aa70d7375c9a715c56f5aa6d328dbe57de86dcceacf8a2',
    schedule_version: 112,
    new_producers: null,
    header_extensions: [],
    producer_signature:
      'SIG_K1_KfVycTXJttPa42UN8FGCvoiW3m1twLHe5NBfaaiSwdvooXKP51Cmj9z981ubV9hNtjkWAAwBiei6KDY9dzHjo5FT9CzY5S',
    transactions: [],
    block_extensions: [],
    id: '0044c32918d0e32ca3567a6aa6ca97afc7af906230fa38f5146bec810a8c0602',
    block_num: 4506409,
    ref_block_prefix: 1786402467
  };

  static blockNonZeroActions = {
    timestamp: '2018-07-06T18:18:20.000',
    producer: 'eosbeijingbp',
    confirmed: 0,
    previous:
      '0044bf9a8fa15cc3562e57a5e2507ae41d11dc12dcf00c7a702ce3f724ae929f',
    transaction_mroot:
      '4e90717826ed264b562eceb09b72b8245c231d18f6b69219bd862538a02cc159',
    action_mroot:
      '884a25f8fe3985c2735d5ee7bf9cdf37b2f8c3c4a4d1d1dad80f9104d8c4202e',
    schedule_version: 112,
    new_producers: null,
    header_extensions: [],
    producer_signature:
      'SIG_K1_K4i1spCnSertsUPQ6zjJzEiNUmwfJMBBsAKU3fYtguqugxTzXspEHiBJEmGAnyEeFvMJAjiHkHVj6UBVS4WetXmikqwMr8',
    transactions: [
      {
        status: 'executed',
        cpu_usage_us: 4465,
        net_usage_words: 14,
        trx: {
          id:
            '6a608914eca4e34a738bbb22f18a4635eecdb66c9941b66c996da62df5af7d27',
          signatures: [
            'SIG_K1_KaaqCWn4ss65yWw9LLwRzp38f2rYaASSoqj25RPMrkwCeJqygiWLi3RpK9CVN5pCZXo3Gqgn3fHtiJwmw4BJhFvRuuLL3o'
          ],
          compression: 'none',
          packed_context_free_data: '',
          context_free_data: [],
          packed_trx:
            'a6b23f5b52be9bf2000c00000000010000000000ea3055000000409a1ba3c201a0986afd5194bf6700000000a8ed323210a0986afd5194bf6780841e000000000000',
          transaction: {
            expiration: '2018-07-06T18:19:18',
            ref_block_num: 48722,
            ref_block_prefix: 201388699,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: 'eosio',
                name: 'sellram',
                authorization: [
                  {
                    actor: 'gyztcojxhege',
                    permission: 'active'
                  }
                ],
                data: {
                  account: 'gyztcojxhege',
                  bytes: 2000000
                },
                hex_data: 'a0986afd5194bf6780841e0000000000'
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: 'executed',
        cpu_usage_us: 4227,
        net_usage_words: 16,
        trx: {
          id:
            '611b9a8defa428ea11e28c8a62d56597df249bdd50e2c6e5e6a6f4910ca9c2a9',
          signatures: [
            'SIG_K1_K5AASurueqgsMatmjdPo4qCgDz32YNLBhyo3gNhjrrZiWRb1pFsQcCqSCgMrYAfJ21pn2x2E1Hqmwj5ZShefYU5Gjskq51'
          ],
          compression: 'none',
          packed_context_free_data: '',
          context_free_data: [],
          packed_trx:
            'a3b23f5b46be00e8d30200000000010000000000ea3055000000004873bd3e01a09867ff5096be6900000000a8ed323220a09867ff5096be69a09867ff5096be69809698000000000004454f530000000000',
          transaction: {
            expiration: '2018-07-06T18:19:15',
            ref_block_num: 48710,
            ref_block_prefix: 47441920,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: 'eosio',
                name: 'buyram',
                authorization: [
                  {
                    actor: 'hazdgobzgyge',
                    permission: 'active'
                  }
                ],
                data: {
                  payer: 'hazdgobzgyge',
                  receiver: 'hazdgobzgyge',
                  quant: '1000.0000 EOS'
                },
                hex_data:
                  'a09867ff5096be69a09867ff5096be69809698000000000004454f5300000000'
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    block_extensions: [],
    id: '0044bf9b0fed73e09e6075a18d4916a1c552625948e7e8738ccedc19738d267f',
    block_num: 4505499,
    ref_block_prefix: 2708824222
  };

  static getActions() {
    return { last_irreversible_block: 9 };
  }

  static getBlock(num) {
    const odd = num % 2 === 0;
    let response;

    if (odd) {
      response = this.blockZeroActions;
    } else {
      response = this.blockNonZeroActions;
    }

    return response;
  }

  static getBlocksWithLengthOf(length) {
    const blocks = [];
    for (let i = 0; i < length; i++) {
      blocks.push(this.getBlock(i));
    }
    return blocks;
  }

  static getInfo() {
    return {
      block_cpu_limit: 199900,
      block_net_limit: 1048576,
      chain_id:
        'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      head_block_id:
        '0045d1bd8ed58431f4ef28ed5f44a45135e8dd3f4ecaa476ecc1aff09e0dd477',
      head_block_num: 4575677,
      head_block_producer: 'helloeoscnbp',
      head_block_time: '2018-07-07T04:03:10.000',
      last_irreversible_block_id:
        '0045d070118672ba278290506aa291fdf70edf02b072c48d2d6d26612bf29472',
      last_irreversible_block_num: 9,
      server_version: '36a043c5',
      virtual_block_cpu_limit: 200000000,
      virtual_block_net_limit: 1048576000
    };
  }
}

export default EosMock;
