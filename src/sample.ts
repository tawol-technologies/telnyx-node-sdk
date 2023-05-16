import Telnyx from "./index";


const telnyx = new Telnyx('Development', 'MY_SECRET', 'MY_PUBLIC');
telnyx.sendMessage({
    from: '',
    to: '',
    text: '',
    subject: '',
});
