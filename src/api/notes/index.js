const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service }) => {
    const notesHander = new NotesHandler(service);
    // eslint-disable-next-line no-param-reassign
    server.route(routes(notesHander));
  },
};
