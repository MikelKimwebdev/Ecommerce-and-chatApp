const express=require('express');

const {createChat, FindUserChat, findChat}=require("../Controllers/chatController");

const router=express.Router();

router.post("/",createChat);    
router.get("/:userId",FindUserChat);
router.get("/find/:firstId/:secondId",findChat);

module.exports = router;