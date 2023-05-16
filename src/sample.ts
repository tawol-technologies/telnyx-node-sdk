import Telnyx from "./Telnyx";


const telnyx = new Telnyx('Development', 'MY_SECRET', 'MY_PUBLIC');
telnyx.sendMessage({
    from: '',
    to: '',
    text: '',
    subject: '',
});
