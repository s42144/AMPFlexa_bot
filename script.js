Telegram.WebApp.init();

let balance = 0;
let minable = true;

document.getElementById('mineButton').addEventListener('click', () => {
    if (minable) {
        // মাইনিং সিমুলেট করা হচ্ছে
        minable = false;
        setTimeout(() => {
            balance += 10;
            document.getElementById('balance').innerText = balance;
            minable = true;

            // যদি ব্যালেন্স ৫০ এর বেশি হয়, তাহলে withdraw বোতাম দেখাবে
            if (balance >= 50) {
                document.getElementById('withdrawButton').style.display = 'block';
            }
        }, 2000); // ২ সেকেন্ড পরে মাইনিং শেষ হবে
    }
});

// Withdraw বোতাম ক্লিক করা হলে
document.getElementById('withdrawButton').addEventListener('click', () => {
    Telegram.WebApp.sendData('withdraw');
    alert('আপনার উইথড্রাল অনুরোধ পাঠানো হয়েছে!');
});
