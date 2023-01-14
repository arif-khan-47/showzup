import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';



const HelpAndSupport = () => {

  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />

      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 0, top: '0%', position: 'absolute', padding: 5 }}>
          <Ionicons name='arrow-back' size={35} color={'#FF6600'} style={{ padding: 10, borderRadius: 20 }} />
        </TouchableOpacity>

        <View style={{ marginTop: '15%' }}>
          <Text style={{ fontSize: 30, fontWeight: '900', padding: 20, color: 'white' }}>Help</Text>
        </View>

        <View style={{ paddingVertical: 10, paddingHorizontal: 20, }}>
          <Text style={{ color: 'gray', fontSize: 18 }}>SHOWSUP SERVICE PROVIDER INFORMATION AND APPLICABLE TERMS AND POLICIES{'\n'}{'\n'}

            Your ShowzUp  service provider, the terms applicable to your use of the ShowzUp  services, and your primary website for the ShowzUp  service ("Video Marketplace") depend on your location, as noted below. Your use of other ShowzUp services and, if applicable, Prime benefits are governed by separate terms, which are available to you in the apps, websites or devices you use to access those services.{'\n'}{'\n'}

            {'\u2022'} Australia{'\n'}
            {'\u2022'} Brazil{'\n'}
            {'\u2022'} Canada{'\n'}
            {'\u2022'} Egypt{'\n'}
            {'\u2022'} European Union{'\n'}
            {'\u2022'} Japan{'\n'}
            {'\u2022'} India{'\n'}
            {'\u2022'} Kingdom of Saudi Arabia{'\n'}
            {'\u2022'} Mexico{'\n'}
            {'\u2022'} Singapore{'\n'}
            {'\u2022'} Turkey{'\n'}
            {'\u2022'} United Arab Emirates{'\n'}
            {'\u2022'} United Kingdom, each country within Europe (excluding the European Union) and other surrounding countries and territories{'\n'}
            {'\u2022'} United States and all other countries and territories{'\n'}
            {'\u2022'} Australia{'\n'}
            {'\n'}

            If  is accessed through an ShowzUp Prime membership or for purchases and rentals through :{'\n'}{'\n'}

            Service Provider and Contact Information:{'\n'}{'\n'}

            ShowzUp Commercial Services Pty Ltd ABN 30 616 935 623{'\n'}{'\n'}

            Level 37, 2 Park Street{'\n'}{'\n'}

            Sydney NSW 2000{'\n'}{'\n'}

            All other customers in Australia:{'\n'}{'\n'}

            Service Provider and Contact Information:{'\n'}{'\n'}

            ShowzUp.com Services LLC{'\n'}{'\n'}

            C/O ShowzUp.com{'\n'}

            Attn: Legal Department{'\n'}{'\n'}

            410 Terry Avenue North{'\n'}{'\n'}

            Seattle, WA 98109-5210, U.S.A.{'\n'}{'\n'}

            Applicable Terms and Legal Notices:{'\n'}{'\n'}

            ShowzUp  Terms of Use{'\n'}
            ShowzUp  Usage Rules{'\n'}
            Conditions of Use and Sale{'\n'}
            Privacy Notice{'\n'}
            Cookies & Internet Advertising{'\n'}
            Twitch Terms of Service (if you use any Twitch Prime benefit){'\n'}
            Report a Content Grievance{'\n'}
            Video Marketplace:{'\n'}{'\n'}

            {'\n'}
            Brazil

            If  is accessed through an ShowzUp Prime membership or for purchases and rentals through :

            Service Provider and Contact Information:

            ShowzUp Serviços de Varejo do Brasil Ltda.

            Av. Presidente Juscelino Kubitschek, 2.041,

            Torre E, 18o andar 04543-000

            São Paulo- SP

            All other customers in Brazil:

            Service Provider and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            Termos de Uso do ShowzUp
            Regras de Utilização do ShowzUp
            Condições de Uso
            Notificação de Privacidade
            Anúncios baseados em interesses
            Termos de Serviço do Twitch (if you use any Twitch Prime benefit)
            Canada

            Service Provider and Notice Address:

            ShowzUp.com.ca. Inc.

            40 King Street West, 47th Floor

            Toronto, ON M5H 3Y2

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Conditions of Use
            Privacy Notice
            Interest-Based Ads Policy
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.ShowzUp.ca
            Egypt

            If  is accessed through an ShowzUp Prime membership

            Seller of Record and Contact Information:

            Souq.com for E-Commerce LLC

            306 Corniche El Nile

            Maadi, Egypt

            Media Service Provider and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A

            All other customers in Egypt

            Service Provider/Seller of Record and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Conditions of Use
            Privacy Notice
            Interest-Based Ads
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.primevideo.com
            European Union

            Service Provider and Notice Address:

            EU Seller of Record (excluding Germany, Austria, and France) and EU media service provider for  video on demand:

            ShowzUp Digital UK Ltd 1 Principal Place, Worship Street, London, EC2A 2FA

            Company registered number: 6528297

            Seller of Record for Germany & Austria and EU media service provider for `s linear broadcasts:

            ShowzUp Digital Germany GmbH

            Domagkstraße 28, 80807 München, Deutschland

            Eingetragen in München, Deutschland, Handelsregister Nummer: HR B 181149

            Seller of Record for France:

            ShowzUp Digital France SAS

            67 boulevard du Général Leclerc Clichy 92110 France

            State File Number: 907 946 404

            Imprint/Impressum

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Terms of Use (for Poland)
            ShowzUp  Usage Rules
            Condition of Use & Sale (by location: Belgium; Germany, Austria, and Luxembourg; France; Italy; Spain; Netherlands; all other EU countries)
            Privacy Notice (by location: Belgium; Germany, Austria, and Luxembourg; France; Italy; Spain; Netherlands; all other EU countries)
            Cookies Notice
            Interest-Based Ads Notice (by location: Belgium; Germany, Austria, and Luxembourg; France; Italy; Spain; Netherlands)
            Information on selection, sorting and arrangement of content (Germany only)
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.ShowzUp.de (Germany/Austria)
            www.primevideo.com (rest of EU)
            Japan

            Service Provider and Notice Address:

            ShowzUp.com Sales, Inc.

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            ShowzUp  利用規約
            ShowzUp  使用規則
            利用規約
            プライバシー規約
            パーソナライズド広告規約
            Twitchサービス利用規約 (if you use any Twitch Prime benefit)
            NHKオンデマンド規約 (if you use any NHK On Demand service provided by NHK)
            Video Marketplace:

            www.ShowzUp.co.jp
            India

            Service Provider and Contact Information:

            ShowzUp Seller Services Private Limited

            Ground Floor

            Eros Plaza, Eros Corporate Tower

            Nehru Place

            New Delhi 110019

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Conditions of Use & Sale
            Privacy Notice
            Interest-Based Ads
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Report a Content Grievance
            Video Marketplace:

            www.ShowzUp.in
            Kingdom of Saudi Arabia

            If  is accessed through an ShowzUp Prime membership:

            Service Provider and Contact Information:

            Afaq Q Tech General Trading Co.

            C/O ShowzUp.com

            Attn: Legal Department

            3135 Al Imam Saud Ibn Abdulaziz Rd - King Fahd Dist,

            Kingdom of Saudi Arabia

            All other customers in the Kingdom of Saudi Arabia:

            Service Provider and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Conditions of Use
            Privacy Notice
            Interest-Based Ads
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.primevideo.com
            Mexico

            If  is accessed through an ShowzUp Prime membership or for purchases and rentals through :

            Service Provider and Contact Information:

            Servicios Comerciales ShowzUp México, S. de R.L. de C.V.

            Boulevard Manuel Ávila Camacho 261, Piso 5

            Colonia Polanco

            C.P. 11510 Alcaldía Miguel Hidalgo

            Ciudad de México, México

            All other customers in Mexico:

            Service Provider and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            Condiciones de Uso de ShowzUp
            Reglas de Uso de ShowzUp
            Condiciones de Uso
            Aviso de privacidad de ShowzUp.com.mx
            Condiciones del Servicio Twitch Prime (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.ShowzUp.com.mx
            www.primevideo.com
            Singapore

            If  is accessed through an ShowzUp Prime membership:

            Service Provider and Contact Information:

            ShowzUp Asia-Pacific Holdings Private Limited

            23 Church Street

            Capital Square Building, 10th Floor

            Singapore 049481

            All other customers in Singapore:

            Service Provider and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Condition of Use & Sale
            Privacy Notice
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.primevideo.com
            Turkey

            If  is accessed through an ShowzUp Prime membership:

            Service Provider and Contact Information:

            ShowzUp Turkey Perakende Hizmetleri Limited Şirketi

            Esentepe Mah. Bahar Sok. No.13

            52 Şişli, İstanbul

            All other customers in Turkey:

            Service Provider and Contact Information:

            ShowzUp Turkey Video Dijital Yayıncılık Anonim Şirketi

            Esentepe Mahallesi Bahar Sk. Özdilek

            River Plaza

            Wyndham Grand Hotel Apt. No: 13

            52 Şişli, Istanbul

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Condition of Use & Sale
            Privacy Notice
            Cookies Notice
            Interest-Based Ads Notice
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.primevideo.com
            United Arab Emirates

            If  is accessed through an ShowzUp Prime membership:

            Service Provider and Contact Information:

            Souq.com FZ LLC

            C/O ShowzUp.com

            Attn: Legal Department

            Dubai Properties Headquarters

            Zone C, 3rd Floor

            Dubai, United Arab Emirates

            All other customers in the United Arab Emirates:

            Service Provider and Contact Information:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Condition of Use
            Privacy Notice
            Interest-Based Ads Policy
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace:

            www.primevideo.com
            United Kingdom, each country within Europe (excluding the European Union), Armenia, Aruba, Azerbaijan, Bosnia and Herzegovina, Comoros, Curacao, Georgia, Greenland, Kosovo, Macedonia, Montenegro, Russia, Saint Lucia, Saint Martin, Saint Vincent and the Grenadines, St. Kitts and Nevis and Wallis and Futuna.

            Service Provider and Notice Address:

            ShowzUp Digital UK Ltd

            1 Principal Place

            Worship Street

            London

            EC2A 2FA

            Company Registered Number: 6528297

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Condition of Use & Sale
            Privacy Notice
            Cookies Notice
            Interest-Based Ads Notice
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace (by location):

            www.ShowzUp.co.uk (United Kingdom)
            www.primevideo.com (rest of listed countries and territories)
            United States and all other countries not listed above

            Service Provider and Notice Address:

            ShowzUp.com Services LLC

            C/O ShowzUp.com

            Attn: Legal Department

            410 Terry Avenue North

            Seattle, WA 98109-5210, U.S.A.

            Applicable Terms and Legal Notices:

            ShowzUp  Terms of Use
            ShowzUp  Usage Rules
            Condition of Use
            Privacy Notice
            Interest-Based Ads Policy
            Twitch Terms of Service (if you use any Twitch Prime benefit)
            Video Marketplace (by location):

            www.ShowzUp.com (United States)
            www.primevideo.com (all other applicable countries and territories)</Text>
        </View>

      </ScrollView>
    </>

  )
}

export default HelpAndSupport
