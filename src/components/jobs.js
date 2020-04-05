import eth from "../img/jobs/eth.png";
import networked from "../img/jobs/networked.png";
import crypto from "../img/jobs/crypto.png";
import chat from "../img/jobs/chat.png";


const jobs = [
    {
        'id': 1,
        'name': 'Eth Notification system',
        'type': 'Scripting',
        'description': 'ETS is a service that automatically sends Ethereum price updates daily and at certain tresholds. It consumes data from the coingecko API and sends price alerts as a Telegram message via IFTTT ',
        'tech': 'Python, IFTTT, webhooks',
        'url': 'https://github.com/damildrizzy/eth_notification_system',
        'image': eth

    },
    {
        'id': 2,
        'name': 'Crypto News',
        'type': 'News Service',
        'description' : 'Crypto News aggregrates Cryptocurrency headlines from various sources.',
        'tech': 'Vanilla Javascript',
        'url': 'https://github.com/damildrizzy/cryptonews',
        'image': crypto

    },

    {
        'id': 3,
        'name': 'Networked.ng',
        'type': 'Networking platform',
        'description': 'I helped implement a points-reward feature by designing a system that assigns points amd reward-badges to users based on their level of interaction on the platform',
        'tech': 'Python, Flask',
        'url': 'https://networked.ng/',
        'image': networked
    },

    {
        'id': 4,
        'name': 'Aproko',
        'type': 'Chat App',
        'description': "Aproko Is a Realtime Multiroom Chat Application",
        'tech': 'Node.js, Express, Websockets, jQuery',
        'url': 'https://aproko.herokuapp.com',
        'image': chat

    }




]

export default jobs;