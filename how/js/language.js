

function changeLanguage() {
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var howToDownload = document.getElementById("howToDownload");
    var step1 = document.getElementById("stepOne")
    var appStore = document.getElementById("appStore")
    var step2 = document.getElementById("stepTwo")
    var hitSearch = document.getElementById("hitSearch")
    var install = document.getElementById("install")
    var step1of = document.getElementById("stepOf")
    var stepOneReg = document.getElementById("stepOneReg")
    var stepTwoReg =document.getElementById("stepTwoReg")
    var stepThreeReg = document.getElementById("stepThreeReg")
    var stepFourReg = document.getElementById("stepFourReg")
    var joinIn = document.getElementById("joinIn")
    var step2of = document.getElementById("stepTwoof")
    var enterTheClub = document.getElementById("enterTheClub")
    var step3 = document.getElementById("stepThree")
    var buyM = document.getElementById("buyM")
    var enterAmount = document.getElementById("enterAmount")
    var step4 = document.getElementById("stepFour")
    var bindEmail = document.getElementById("bindEmail")
    var step5 = document.getElementById("stepFive")
    var requestSent = document.getElementById("requestSent")
    var step6 = document.getElementById("stepSix")
    var contactClub = document.getElementById("contactClub")
    var howToReg = document.getElementById("howToReg")
    var signUp = document.getElementById("signUp")
    var enterUser = document.getElementById("enterUser")
    var enterPass = document.getElementById("enterPass")
    var enterInvitational = document.getElementById("enterInvitational")
    var clickSignUp = document.getElementById("clickSignUp")
    var inGameName = document.getElementById("inGameName")
    var tapTheLobby = document.getElementById("tapTheLobby")
    var clickTheTable = document.getElementById("clickTheTable")
    var clubId = document.getElementById("clubId")
    var howToDownloadButton=document.getElementById("howToDownloadButton")
    var howToRegisterButton = document.getElementById("howToRegisterButton")
    var howToJoinButton = document.getElementById("howToJoinButton")
    var contactUs = document.getElementById("contactUs")
    var facebook = document.getElementById("facebook")
    var viber = document.getElementById("viber")
    var telegram = document.getElementById("telegram")
    var messageUs = document.getElementById("messageUs")
    var communicate = document.getElementById("communicate")
    var howToBe = document.getElementById("howToBe")




    

   
    


    switch (selectedLanguage) {
        case "chi":
            howToDownload.innerText = "如何下載";
            step1.innerText ="第一步: 註冊賬號";
            appStore.innerText = "請打開APP商店";
            step2.innerText = "第二步: ";
            hitSearch.innerText = "1. 在搜索欄輸入 'milpoker'";
            install.innerText = "2. 找到Milpoker App 並點擊安裝";
            step1of.innerText = "步骤1";
            stepOneReg.innerText = "步骤1";
            stepTwoReg.innerText = "第2步"
            stepThreeReg.innerText = "步骤3"
            stepFourReg.innerText = "步骤4"
            enterTheClub.innerText = "輸入俱樂部號碼";
            joinIn.innerText = "點擊'Joinin'";
            step2of.innerText = "第2步";
            step3.innerText = "步骤3";
            buyM.innerText = "購買M幣並開始遊戲 (購買M幣需要捆綁郵箱)";
            enterAmount.innerText = "輸入您要購買的M幣數量";
            step4.innerText = "步骤4"
            bindEmail.innerText = "单击设置并绑定电子邮件以进行安全交易。";
            step5.innerText = "步骤5";
            requestSent.innerText = "您購買M幣的請求已發送給俱樂部"
            step6.innerText = "步骤6"
            contactClub.innerText = "聯繫您所在俱樂部的客服完成購買M幣交易"
            howToReg.innerText = "如何註冊";
            signUp.innerText = "注册以注册您的帐户"
            enterUser.innerText = "1. 輸入用戶名"
            enterPass.innerText = "2. 輸入密碼"
            enterInvitational.innerText = "3. 輸入邀請碼 (如有)"
            clickSignUp.innerText = "4. 點擊 '註冊'"
            inGameName.innerText = "可以選擇更改暱稱"
            tapTheLobby.innerText = "點擊 'Lobby' 進入大廳 (免費金幣局)"
            clickTheTable.innerText = "點擊開始大廳遊戲"
            clubId.innerText = "如何加入俱乐部ID"
            howToDownloadButton.innerText = "如何下载"
            howToJoinButton.innerText = "如何加入俱乐部ID"
            howToRegisterButton.innerText="如何注册"
            contactUs.innerText = "联系我们申请俱乐部老板"
            facebook.innerText = "Facebook"
            viber.innerText = "维贝尔"
            telegram.innerText = "电报"
            messageUs.innerText = "给我们留言"
            communicate.innerText = "如果您想成为俱乐部所有者，请单击顶部的按钮与 Ace Advantage 营销团队进行交流"
            howToBe.innerText = "成为俱乐部老板";
            

            


            break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }
}








