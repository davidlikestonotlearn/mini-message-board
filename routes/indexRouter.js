let messages = [ 
    {
        id: 1,
        creator: "john",
        message: "HI"

    }
]


const { Router } = require("express")
const messageRouter = Router()

async function getAllMessages() {
    return messages
}
async function getMessage(req, res) {
    const message = await getAllMessages()
    res.render("index", {messages: message})
}

messageRouter.get("/", getMessage) // Render messages normally

messageRouter.get("/new", (req, res) => { // Show new form
  res.render("form");
});

messageRouter.post("/new", (req, res) => { 
    const inputCreator = req.body.creator
    const inputMessage = req.body.message

    messages.push({
        id: messages.length + 1,
        creator: inputCreator,
        message: inputMessage
    })

    res.redirect("/")

})

messageRouter.get("/messages/:messageId", (req, res) => {
    const id = Number(req.params.messageId);
    const message = messages.find((msg) => msg.id === id);

    if (!message) {
        res.status(404).send("Message not found");
        return;
    }

  res.render("message", { message: message });
});

module.exports = messageRouter