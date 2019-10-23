const pg = jest.genMockFromModule('pg')

class Pool {
  async query() {
    return {
      rowCount: 1,
      rows: [
        {
          postid: 2,
          username: 'ryan',
          title: 'Hello, world',
          content: 'hello world!',
        },
      ],
    }
  }
}

pg.Pool = Pool

module.exports = pg
