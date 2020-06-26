import eth from "../img/jobs/eth.png";
import networked from "../img/jobs/networked.png";
import crypto from "../img/jobs/crypto.png";
import chat from "../img/jobs/chat.png";
import covid from "../img/jobs/covid.png";
import bot from "../img/jobs/bot.png";
import portfolio from "../img/jobs/portfolio.png";


const jobs = [
    {
        'id': 1,
        'name': 'That Song Bot',
        'type': 'Bot',
        'description': 'A twitter bot that automatically recognises music from video',
        'tech': "Python, Redis, Heorku",
        'url': 'https://twitter.com/thatsongbot',
        'image': bot
    },
    
    {
        'id': 2,
        'name': 'Covidwrapper',
        'type': 'Library',
        'description': 'Covidwrapper is a python wrapper for the covid19 API.',
        'tech': "Python",
        'url': 'https://github.com/damildrizy/covidwrapper',
        'image': covid
    },
    {
        'id': 3,
        'name': 'Aproko',
        'type': 'Chat App',
        'description': "Aproko is a Realtime Multiroom Chat Application",
        'tech': 'Node.js, Express, Socket.io, jQuery',
        'url': 'https://aproko.herokuapp.com',
        'image': chat

    },
    {
        'id': 4,
        'name': 'Networked.ng',
        'type': 'Networking platform',
        'description': 'I helped implement a points-reward feature by designing a system that assigns points amd reward-badges to users based on their level of interaction on the platform',
        'tech': 'Python, Flask',
        'url': 'https://networked.ng/',
        'image': networked
    },
    {
        'id': 5,
        'name': 'Samuel Adekoya',
        'type': 'Personal Website',
        'description':"Well, I'm sure you are familiar with this one.",
        'tech': 'Reactjs',
        'url': '/',
        'image': portfolio

    },
    {
        'id': 6,
        'name': 'ETS',
        'type': 'Scripting',
        'description': 'ETS is a service that automatically sends Ethereum price updates daily and at certain tresholds. It consumes data from the coingecko API and sends price alerts as a Telegram message via IFTTT ',
        'tech': 'Python, IFTTT, webhooks',
        'url': 'https://github.com/damildrizzy/eth_notification_system',
        'image': eth

    },
    {
        'id': 7,
        'name': 'Crypto News',
        'type': 'News Service',
        'description' : 'Crypto News aggregrates Cryptocurrency headlines from various sources.',
        'tech': 'Vanilla Javascript',
        'url': 'https://github.com/damildrizzy/cryptonews',
        'image': crypto

    }

   




]

export default jobs;