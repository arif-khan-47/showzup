import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const Privacy = () => {

  const navigation = useNavigation()

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />

      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 0, top: '0%', position: 'absolute', padding: 5 }}>
          <Ionicons name='arrow-back' size={35} color={'#FF6600'} style={{ padding: 10, borderRadius: 20 }} />
        </TouchableOpacity>

        <View style={{ marginTop: '15%' }}>
          <Text style={{ fontSize: 30, fontWeight: '900', padding: 20, color: 'white' }}>Privacy Policy</Text>
        </View>



        <View style={{ paddingVertical: 10, paddingHorizontal: 20, }}>

          <Text style={{ color: 'gray', fontSize: 18 }}>The Walt Disney Company has acquired certain 21st Century Fox businesses, including those providing the services described below. This policy has been updated to reflect that transaction.

            Last updated: 2 April 2020

            Table of contents:

            Contact information
            Objective and Scope
            Collection of Personal Information
            Payment Card and Billing Information
            Purposes of processing
            Disclosure
            Your Controls and Choices
            Children's Privacy
            Data transfer, storage & processing globally
            Security
            Cookies
            Change in Privacy Notice
            Contact us
            1. Contact information
            Novi Digital Entertainment Private Limited, Starhouse, Urmi Estate, 95 Ganpatrao Kadam Marg, Lower Parel (West), Mumbai 400013, India ("we", "us", "our", "Novi") is the owner, operator, manager of the Disney+ Hotstar Platform ("Platform" or the "Disney+ Hotstar Service, which includes all the features available on the Platform").

            Novi values the trust placed by users of the Disney+ Hotstar Service ("you", "your", "user", "subscriber") and therefore, we follow the highest standards to protect your Personal Information.

            If you require any information or clarification regarding the use of your Personal Information (defined below) or this Privacy Notice or if you require any general information or clarification or inquiry regarding the Platform please email us at hello@hotstar.com.

            2. Objective and Scope
            This Privacy Notice ("Privacy Notice") explains how we use and protect Personal Information (defined below) of the users or subscribers of our Disney+ Hotstar Service in India.

            This privacy notice describes the usage of information provided or collected through sites and applications, where this privacy notice is posted ("Platform") and affiliate or third-party sites / platforms through which the Platform and/or any of its features and/or services available on the Platform may be provided. We follow this privacy notice in accordance with applicable law in the places where we operate. In some cases, we may provide additional data privacy notices specific to certain features or services. Those notices are to be read in combination with this Privacy Notice. Please also keep in observance that our sites and applications may contain links to other sites not owned or controlled by us and we are not responsible for the privacy practices of those sites. We encourage you to be aware when you leave our sites or applications and to read the privacy policies of other sites that may collect your Personal Information.

            We encourage you to read the applicable Terms of Use to understand the terms related to the use of the Platform and Disney+ Hotstar Service in general.

            3. Collection of Personal Information
            Where we refer to 'Personal Information' we mean any information related to a particular individual who we identify (whether directly or indirectly) a particular individual or natural person. This includes direct identifiers such as your name, postal address, email address, and mobile number, and also includes all other information which is linked to that information such as your location. Where we refer to "ID" we mean a list of numbers and/or letters (also known as a numeric or alphanumeric string) which we or our service providers may generate and which is used as a means to give you a unique customer or user identifier - it cannot directly identify personally but it may be able to do so where your Personal Information is associated with it. If you are accessing the Disney+ Hotstar Service from the territory of India, for the purpose of this Privacy Notice, 'Personal Information'.

            3.1 Information provided by you
            We may ask for and you may choose to provide the below information, which may include Personal Information, when you use or register for the Disney+ Hotstar Service and create a subscription account, upload content to or via the Platform, use any of the features or services available on the Platform (such as game play) or contact us directly:

            Name
            Email Address
            Phone number
            Age or date of birth
            Gender
            Password
            Location, pin code, area code, and occupation as provided by you
            Payment and other information pertaining to your transactions on the Disney+ Hotstar Service
            Any service requests;
            Search terms;
            language preferences,
            content preferences,
            account settings,
            user-generated content including comments, photos or videos which you choose to upload or broadcast on the Platform
            game play data during game play events on our Platform
            Other profile information, such as social media account information and profile image
            (where feature is available) your phone and social network contacts, with your permission
            information to verify an account such as a form of identification (if requested)
            information in correspondence you send to us, including responses to surveys or other feedback
            information you share when you participate in marketing promotions, prize draws or competitions,
            your opt-in choices and communication preferences;
            any other information that you may otherwise choose to provide us.
            We collect this information in a number of ways, including when you enter it while using our Platform, interact with our customer support, or participate in game play events or hosted games on our Platform, surveys, or marketing promotions, prize draws or competitions. In some cases, where you access our Platform service available via mobile devices, Smart TVs or Internet connected TVs or Internet connected devices ("streaming devices") your streaming device may store some of your Personal Information in their memory. These streaming devices are operated by third parties and these third parties will have their own privacy notices or other policies regarding the handling of Personal Information that they independently collect from such streaming devices. You should carefully read the privacy notice and policies of these streaming devices. We are not responsible for the privacy practices of these third parties, and the information practices of these third parties are not covered by this Privacy Notice.

            3.2 Information we collect automatically
            We and certain third parties on our behalf may collect information about you and your use of our Platform, your interactions with us or our advertising or any direct marketing we send you, as well as information regarding your computer or other streaming device used to access our service. The information may be collected using tracking technologies such as cookies, Flash cookies, pixels, tags, software development kits, application program interfaces, and Web beacons and may include:

            Your activity on the Disney+ Hotstar Platform such as pages/titles viewed, load times, watch times, content selection and watch history, transactions initiated and/or completed, search queries and platform features used. This information may include the platform or website that you just visited (whether this platform is on Disney+ Hotstar Services or not), which platform or website you next visit.
            Device tokens for push notification (if you have enabled push notifications)
            Your interactions with our emails, communications, messages, advertisements on third party platforms and other channels
            Your interactions with our customer support such as the date, time and reason for contacting us, transcripts of any chat conversations, and if you call us, your phone number and call recordings;
            Information about your general location, including location based on your mobile phone SIM card and/or IP address and, with your permission your precise location based on GPS data. In the event IP detection fails, we will collect the last cached location as your current location;
            Device and software information such as device id, device model, platform, type of operating system, installed version, time zone setting, mobile carrier, screen resolution etc. and other unique identifiers. With your permission we may also collect information pertaining to the applications frequently used by you on your device;
            Advertisement identifiers such as IDFA, GAID etc and data related to your interaction with the advertisement that are served on the Disney+ Hotstar Platform;
            We capture information related to the performance of the mobile application and the Platform, such as crash logs, build analytics and other performance statistics generated when you use the Platform;
            With your permission, we may collect information pertaining to content that you are exposed to on television using your microphone. For this purpose, we have integrated a software development kit in our Disney+ Hotstar Service that is designed to measure and analyze television channel viewership of Disney+ Hotstar Users ("TV SDK"). The TV SDK, is initiated only after we obtain your permission and uses the microphone on your device to capture audio samples (including ambient sounds), to create encrypted fingerprint file of such audio sample in real-time. The fingerprint files are matched against a database of known fingerprints of television channels and television content to identify and understand content that you have been exposed to on the television. The fingerprint files cannot be reverse-engineered into audio samples and are stored on your devices for a period not more than 48 hours. No actual audio samples or voice recordings including conversations that you may have, are saved on your device or transferred to the Disney+ Hotstar Service on any third party, at any point of time.
            3.3 Inferred Information through usage and log data
            We may track certain information about the content viewed and your visit to our Platform. This information may include the platform that you just visited (whether this platform is on Disney+ Hotstar Services or not), which platform you next visit, your computer browser information, your mobile phone OS version.

            3.4. Information we collect through third party sources
            We may obtain your Personal Information from other sources.

            If you choose to link, connect or login to our Platform using a social media platform like Facebook, Twitter, Instagram or Google the social media platform may send us your profile and social information such as Email ID, Name, Friend list, Friend's social information, etc.

            We may also receive information about you from third parties but will only do so where we have assurances that you have given your permission. For example, we may obtain data related to you and your interests from i) publicly available sources such as public or open government databases or ii) online and offline data providers (including advertising networks and analytics providers).

            4. Payment Card and Billing Information
            When you purchase a subscription package using one or more of our payment gateway service providers, or any other online or mobile payment services provider we may use (including through any app stores), the following payment information will be collected: your credit/debit card details (number, card expiry date, CVC code) or other bank account details along with the date, time and amount of the transaction payment. This payment information is stored by our payment processors and associated with a merchant name/ID and location which our payment processor gives to us, together with a unique customer ID which we share with them but this payment information is never stored or processed by us. Our payment processors use this payment information to process and facilitate the payment of your subscription fee in order that we may provide you with the service you have requested or to enter into a contract with you to access the Platform (in other words to perform the contract). So that we know you have paid your subscription fee our payment processors will send us a unique transaction ID which we associate with your unique customer ID and which we keep for internal accounting purposes because we have a legal obligation to do so.

            Our payment processors may use third party fraud detection software or providers which analyse your payment information in order to make automated decisions as to whether or not payment from you will be accepted. You have the right to contest any fraud decision made about you and to be given more information about why any such decision was made by contacting us.

            Where you pay a third party for your subscription package (e.g. an app store like Apple App Store) your payment information is directly collected and controlled by that third party. However, we receive invoice receipts from third parties for your subscription purchase and these receipts are stored by us as we have a legitimate business interest to keep them for internal accounting and tax purposes and to comply with our legal obligation as per any applicable laws including any audits, legal proceedings and/or investigations.

            Where our payment processors are providing payment processing services to us we put in place appropriate contracts to protect your personal information. For the following aspects of the payment processing our payment processor may act as a controller of your payment information (identified and listed above): providing the payment processing services to you at your request,):, monitoring, preventing and detecting fraudulent payment transactions, complying with legal or regulatory obligations which apply to the financial services sector and analysing, developing and improving their products and services. Our payment processors have their own privacy policies in place and we recommend you read those policies before you provide your payment information.

            In order to process any of your customer support queries related to payment processing, our payment processors give us access to the first 6 digits and last 4 digits of your credit/debit card (including any updates) so that we can perform the contract with you and provide you with a quick resolution of your queries. We also use the first 6 digits of your credit/debit card so that, on the basis of our legitimate business interest, we can analyse the most popular card types and issuing banks of our customer base to ensure that we are able to improve our user experience and provide you better service. Our payment processors will also pass us your expiry date after each payment transaction is completed and we will use this to send you an email reminder to update your payment information before your card expires as we believe we have a legitimate interest to make sure your access to the Platform is not interrupted, you can still cancel at any time. However, at no point in time do we have access to or store the full credit/debit card number in our systems.

            5. Purposes of processing
            We will only collect and process Personal Information about You where we have lawful basis to do so. Our lawful basis for processing your Personal Information will vary depending on your country, the context in which we collect and use it and the following examples give you as a guide as to which basis we think applies (but if the context changes or other circumstances arise then the lawful basis may also change). Our primary purpose in collecting your information, including Personal Information from you is to deliver the personalized Disney+ Hotstar Service and its various features. Please note that should you choose to not provide us consent to collect your information, including Personal Information, we may not be able to perform the contract with you. Where we refer to 'perform the contract' we mean the Terms of Use applicable to your use of the Disney+ Hotstar Service, which means that you may either not be able to access certain features of the Disney+ Hotstar Service or we may not be able to provide you the Disney+ Hotstar Service in entirety.

            For example, we use your information where we need the Personal Information to perform the contract with you (for example, to provide the Platform or our services to you) so as to:

            Register you on our Platform and create a subscription account or give you guest access,
            Allow you to Sign Up/ Log In using social media accounts like Facebook etc.,
            Process your payment card details (as described in Section 4 above),
            Provide you with customer or technical support including addressing support queries related to, but not limited to, payment processing, or to diagnose any problems with our servers etc.
            Send you transactional emails or to provide you with information, direct marketing, online and offline advertising and other materials regarding products, services and other offers from time to time in connection with the Disney+ Hotstar Service or its parent, subsidiary and affiliated companies ("Platform Entities") and its joint ventures.
            Determine your geographic location, to provide you localized content including advertisements, personalized viewing recommendations, allow you to continue watching previous content at another time or on another streaming device, and to determine your Internet service provider to troubleshoot a technical issue, and help us quickly and efficiently respond to inquiries and requests;
            If you are a traveler visiting various countries around the world and avail the Platform's services, then we will determine your location using your IP address to determine the relevant Disney+ Hotstar Services which may be offered to you;
            To provide you with a personalised service and experience; we do this by linking some or all of your Personal Information with your activity on our Platform across all your streaming devices and associating and storing this information with a unique platform generated identifier that is generated for each user (guest as well as registered user). When a guest user subsequently registers and creates an account, the information and data relating to such user's past activities gets added to and associated to the registered account.
            In other contexts, if the processing of your Personal Information is subject to the EU General Data Protection Regulation, we use your Personal Information where the processing is in our legitimate interests and not overridden by your fundamental rights and freedoms (for example, our direct marketing activities in accordance with your preferences) such as to:Display or target advertisements on the Platform based on your registration or profile information, location and/or your activity on the Platform across all your streaming devices (including inferred information through usage and log data) which is associated with your device advertising identifier (IDFA, GAID etc) – this is typically referred to as 'interest-based advertising'. We also display contextual advertisements on the Platform but these are not targeted to any particular user and does not make use of any information that personally identifies you or precisely locates you (contextual advertising is advertising which we target based on the content being viewed, for example if you are watching a particular sporting event we may serve adverts of companies or products related to that particular sport or the age-group most likely to be watching).
            Research, analyze and understand our audience and what content and advertising they may view, watch or otherwise engage with, in order to improve our service (including our user interface experiences and security features) and optimize content selection i.e. recommend or make it easier for you to find content we think you will enjoy; evaluate your eligibility for certain types of offers, products or services and market such products or services to you; to perform analytics and conduct customer research, including general market research or surveying our customers' needs and opinions on specific issues, generating sales and traffic patterns, and to analyze advertising effectiveness, both on an anonymous basis (e.g., by aggregating data) or on an individual basis (if legally permissible), in combination with other information collected from tracking technologies and aggregate it with information collected from other Users using our Platform, to attempt to provide you with the Services and a better experience on the Platform. For example, one of the ways we use this information is to count the number of times an advert or other content is viewed because this might be the metric by which our advertisers pay us. This information is compiled and analyzed on an aggregated basis.
            Allow you to participate in interactive features such as Game play events on the Platform, providing you with relevant gameplay experience, determine and declaring winners and providing you with prizes.
            Analyse and measure how effective our advertising is by determining which media sources should be paid for delivering a desired action e.g. users who install our application or subscribe (also known as 'attribution'), so that we pay for demonstrated value and don't overspend.
            We will use your Personal Information with your explicit consent as follows:

            When you agree to share your precise location based on GPS data, we will combine this information with other information that you provide to us on the Disney+ Hotstar Service to provide personalised content and advertisements with better accuracy basis your geographic location e.g. you may see more regional content recommendations or advertisements for local establishments, when you share your precise location based on GPS data;
            When you agree to share information pertaining to the applications frequently used by you on your device, we will combine this information with other information that you provide to us on the Disney+ Hotstar Service, to display advertisements that are more relevant to your interest areas e.g. if you frequently use applications related to sporting events, we may serve advertisements of companies or products related to sporting events; and
            When you agree to share information pertaining to the content you are exposed to on the television, we may use this information along with other information that you provide us on the Disney+ Hotstar Service, to provide you with personalised content similar to those you watch on television. We may also use this information to serve advertisements more relevant to you as well to understand and analyse your exposure to advertisements on other platforms to demonstrate the effectiveness of our Platform.
            Or otherwise whenever the law requires us to get your permission or where we have stated we may seek your permission in this Privacy Notice. In some contexts, we use your Personal Information where we have a legal obligation to do so or to protect your vital interests or those of another person:

            Prevent, detect and investigate potentially prohibited or illegal activities, including fraud, and enforcing our terms (such as determining free trial eligibility);
            Confirming your identity if you are exercising legal rights;
            Notify you about changes in the Terms of Use or in this Privacy Notice;
            Carry out our obligations and enforce our rights arising from any contracts entered into between you and us/our distributor.
            When you access or use the Services or send any data, query, request or communication to us via our Support email, you understand that you are communicating with us electronically, and that we may respond via electronic means from us, such as by email.

            6. Disclosure
            6.1 SERVICE PROVIDERS
            At times we may make your Personal Information available to our service providers (such as but not limited to: marketing, analytics, research, communication, advertisements, infrastructure and IT services, technology or software providers, payment processing and other service providers) that work with us or assist us to provide services to you or license us software which we include in our application(s). Personal Information will only be shared with our service providers to provide or improve the Disney+ Hotstar Service and to enable us to analyse our marketing efforts. We do not authorize our service providers to use or disclose your Personal Information except in connection with providing their services. We or our service providers may also share your advertisement identifiers such as IDFA, GAID etc. with advertising / data exchanges, and marketing analytics and other digital advertising and marketing service providers. The advertisement identifiers are used by these exchanges and service providers to decide which ads you see both on our sites and applications and on third-party sites and applications.

            6.2 BUSINESS OR PROMOTIONAL PARTNERS
            We may offer joint promotions that, in order for you to participate and benefit from any promotional offer, will require us to share your Personal Information with third parties so that we co-ordinate and fulfil the incentive offered. These third parties are responsible for their own privacy practices.

            6.3 Business Transfers
            We provide Personal Information to our affiliates and other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Notice and any other appropriate confidentiality and security measures

            6.4 Legal
            In the event of any requirement by court order, government or quasi-government agency to disclose your Personal Information, we will disclose information as may be legally required. We may also disclose your Personal Information if we, in the good faith believe that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process

            In the event Novi is merged with or acquired by another company or in case of re-organization or re-structuring of business, we and our affiliates may share your Personal Information, wholly or in part, with another business entity.

            7. Your Controls and Choices
            We provide you the ability to exercise certain controls and choices regarding our collection, use and sharing of your Personal Information. In accordance with applicable law, your controls and choices may include:

            7.1 Managing Your Information
            You can access some of your Personal Information through the 'My Account' section of the Platform after a successful login. You are responsible for providing us with your accurate Personal Information and keeping your Personal Information up-to-date.

            7.2 INTEREST-BASED ADVERTISING
            To opt out of interest-based ads from Disney+ Hotstar Service in connection with a resettable device identifier on a mobile device, tablet, or streaming media devices, please configure the appropriate setting on your device (usually found under "privacy" or "ads" in your device's settings). You may still see ads on your device, but they will not be tailored to your interests.

            7.3 PUSH NOTIFICATIONS
            If you have enabled push notifications then you can disable (or enable) any time by going to your device "Settings" and clicking on "Notifications," and then changing those settings for some or all of the apps on your device.

            (Different device configurations, or updates to devices, may affect or change how these settings work)

            7.4 Rectification of Inaccurate or Incomplete Information
            You can ask us to correct inaccurate or incomplete Personal Information concerning you by sending us an email to our support email address. In case you have made your subscription via Apple iTunes, then you will have to rectify your subscription and / or personal data on the Apple iTunes platform as per their applicable processes.

            7.5 Data Access and Portability
            In some jurisdictions, applicable law may entitle you to request copies of your Personal Information held by us. You may also be entitled to request copies of Personal Information that you have provided to us in a structured, commonly used, and machine-readable format and/or request us to transmit this information to another service provider (where technically feasible). You can issue such a request by contacting us via the provided support email. In case you have made your subscription via Apple iTunes, then you will have to request for access to your subscription / personal data or portability of your subscription / personal data on the Apple iTunes platform as per their applicable processes.

            7.6 Data Retention and Erasure
            We retain your Personal Information as long as necessary for providing you the services and as per the lawful basis of processing and to comply with our legal obligations. In particular, when determining how long we retain personal data, we take into account how long we need it to:

            Maintain business records for analysis and/or audit purposes;
            Comply with record retention requirements under the law;
            Defend or bring any existing or potential legal claims; and
            Deal with any complaints regarding the Platform/any services provided on the Platform.
            The data that we collect to create a profile of you for the purpose marketing and advertising (i.e. your watch history and activity on the platform) is retained for: 1) a period of 12 months if you are based in the United Kingdom, or 2) the maximum period allowed by law in your territory if you are not based in the United Kingdom.

            The data that we collect for sending your direct marketing communications (i.e. your phone number), except your registration information, is retained and used for a period of 2 years from the last date of your active subscription.

            At the end of the retain period your personal data will be anonymised.

            If you no longer want us to use your information, then you can request that we erase your Personal Information and close your Platform account. Erasure of your information from the Platform will result in your subscription being terminated without any refunds. In case you have made your subscription via Apple iTunes, then you will have to unsubscribe yourself from the Apple iTunes platform as per their applicable processes to ensure that you are not being charged by Apple any further. Additionally, in case of Apple iTunes, you will have to request for erasure of your personal / subscription data on Apple iTunes platform as per their applicable process. Please note that if your request for the erasure of your Personal Information;

            We may retain some of your Personal Information as necessary for our legitimate business interests, such as fraud detection and prevention and enhancing safety. For example, if we suspend a Platform account for fraud or safety reasons, we may retain certain information from that account to prevent that user from opening a new account in the future.
            We may retain and use your Personal Information to the extent necessary to comply with our legal obligations. For example, we may keep some of your information for tax, legal reporting and auditing obligations.
            7.7 Withdrawing Consent and Restriction of Processing
            For data that we collect, and process based on permissions or consent obtained from you, you may withdraw your consent at any time, by selecting preferences available in the app, on your device, or by sending us an e-mail. We shall review your request and may ask you to verify your identity. In cases where you agreed to provide precise location basis the GPS data or microphone access, you may at any time withdraw such consent by disabling the location and microphone permission from the setting menu on your device. Should you require assistance to revoke your consent earlier given, please contact us using the information provided towards the end of this Privacy Notice.

            7.8 Objection to Processing
            In certain jurisdictions where you have the legal right to object to the use of your Personal Information with respect to certain types of processing, including processing for direct marketing and profiling, you can object by changing your preferences, disabling cookies as set out in our Cookies Policy or by contacting us (see Contact Information). If you wish use to cease or restrict processing of your Personal Information in relation to personalised content or interest-based advertising then, unless the Platform allows you to select available preferences, then you should cease to use the Platform and we can arrange to cancel your subscription. In case you have made your subscription via Apple iTunes, then you will have to unsubscribe yourself from the Apple iTunes platform as per their applicable processes to ensure that you are not being charged by Apple any further. Additionally, in case of Apple iTunes, you will have to object to processing of your subscription / personal data on Apple iTunes platform as per their applicable processes.

            8. Children's Privacy
            We do not knowingly permit any person who is under 18 years of age to register or to provide any other personally identifying information. Please do not register with us if you are below 18 years of age. If we become aware that any Personal Information of persons less than 18 years of age has been collected on the Platform without verified parental consent, then we will take the appropriate steps to delete any such information.

            The Platform includes a Kid's mode feature, which when activated, provides access exclusively to children-friendly content. While persons under the age of 18 may utilize the Disney+ Hotstar Service, they may do so only with the involvement, supervision, and approval of a parent or legal guardian.

            9. Data transfer, storage & processing globally
            We operate globally and may transfer your Personal Information to Novi affiliated companies or service providers or third-party recipients to whom we provide technology and hosting services, in locations around the world for the purposes described in this Privacy Notice. Accordingly, by consenting to this Privacy Notice, you also provide consent to Novi to transfer your Personal Information to Novi affiliated companies or service providers or such third-party recipients in locations around the world. Wherever your Personal Information is transferred, stored or processed by us or our affiliates or service providers, we will take reasonable steps to safeguard the privacy of your Personal Information.

            10. Security
            We are continuously implementing and updating administrative, technical, and physical security measures to help protect your Personal Information against unauthorized access, loss, destruction, or alteration. Some of the safeguards we use to protect your information are firewalls and data encryption, and information access controls. These measures are designed to provide a level of security appropriate to the risks of processing your Personal Information. If you know or have reason to believe that your account credentials have been lost, stolen, altered, or otherwise compromised or in case of any actual or suspected unauthorized use of your account, please (See Contact Information below).

            The Disney+ Hotstar Service uses commercially reasonable security practices and procedures industry practices and procedures designed to help keep your Personal Information safe and secure. Unfortunately, the transmission of information over the Internet is not completely secure. Although we strive to protect your Personal Information, we cannot guarantee the security of your data while it is being transmitted to our Disney+ Hotstar Service; any transmission is at your own risk. We will also ensure, on a commercially reasonable efforts basis, that any agent or third party that we employ complies with the same security standards as we do for the protection of your Personal Information.

            Your information may be transferred to or may be maintained on computers, computer systems and computer resources located outside of your state or country where the privacy laws may be different (but no less stringent than the restrictions imposed by Indian law) as those where you live. If you are located outside India and choose to provide information to us, please be aware that the Disney+ Hotstar Service is hosted in India and that Platform keeps or transfers information to and from India for storage and processing.

            11. Cookies
            A cookie is a small text file that can be stored on and accessed from your device when you visit our Platform, to the extent you agree. The other tracking technologies work similarly to cookies and place small data files on your devices or monitor your website activity to enable us to collect information about how you use our sites. The information provided below about cookies also applies to these other tracking technologies.

            We and our service providers may uses cookies and other technologies to store information in your web browser or on your mobile phone, tablet, computer, or other devices (collectively "devices") that allow us to store and receive certain pieces of information whenever you use or interact with our Platform. Such cookies and other technologies help us to identify and learn more about our users and their likely interests, and to deliver and tailor marketing or advertising. We also use cookies and other tracking technologies to control access to certain content on our sites, protect the sites, and to process any requests that you make to us.

            If you do not want cookies to be dropped on your device, you can adjust the setting of your Internet browser to reject all or some cookies. For further information about how to do so, please refer to your browser 'help' / 'tool' or 'edit' section for cookie settings.

            Please note that if your browser setting is already setup to block all cookies then some of this site's features may not operate as intended.

            If you want to remove previously-stored cookies, you can manually delete the cookies at any time through your browser settings. However, this will not prevent the Platform from placing further cookies on your device unless and until you adjust your internet browser setting as described above.

            12. Change in Privacy Notice
            This Privacy Notice is subject to change from time to time. We reserve the right, at our sole discretion, to modify the terms of this Privacy Notice from time to time in order to ensure compliance with applicable laws or in response to changing regulatory or operational requirements ("Updated Terms"). The Updated Terms shall be effective immediately (unless we state otherwise) and shall supersede the terms of this Privacy Notice. We will notify you of any changes to this Privacy Notice if the changes significantly affect your rights or as may be required by law. Your continued use of the Disney+ Hotstar Service after any updates will mean you have accepted those changes. If you do not agree to the updates you should stop using the Service and cancel your subscription.

            To see the previous version of this Privacy Notice please [link]

            13. Contact us
            If You have any questions about this Privacy Policy, the practices of Platform or Your dealings with the Website, You can contact us at hello@hotstar.com or via the links at the bottom of the page or you can write and send a letter to us at the below address :-

            Novi Digital Entertainment Private Limited

            Urmi Estate, Ganapatrao Kadam Marg,

            Railway Colony,

            Lower Parel, Mumbai,

            Maharashtra 400013

            Please do not share any private information at the above stated email id hello@hotstar.com

            If you're not satisfied with our response to any complaint or believe our processing of your information does not comply with data protection law, you can write to our Grievance Officer: Mr. Manu Anand on the email id hello@hotstar.com.</Text>

        </View>

        {/* <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Support Requests</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity> */}


      </ScrollView>

    </>

  )
}

export default Privacy
