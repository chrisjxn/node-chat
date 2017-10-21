let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        req.body.id = id;
        id++
        let newMessage = Object.assign({}, req.body)

        messages.push(newMessage)
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        messages.map(item => {
            if (+req.params.id === item.id) {
                item = Object.assign(item, req.body)
            }
            return item
        })
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        messages = messages.filter(item => {
            return item.id !== +req.params.id
        })
        res.status(200).send(messages)
    }
}