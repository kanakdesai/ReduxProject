import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Twitter({
  userName,
  accountName,
  proPicture,
  verified ,
  time,
  date,
  dark = true,
  like ,
  tweet,
}) {
  const Dark = () => {
    return (
      <View style={styles.cardDark}>
        <View style={styles.horizontal}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {proPicture ? (
              <Image style={styles.proPic} source={proPicture}></Image>
            ) : (
              <Image
                style={styles.proPic}
                source={require('./twitter.png')}></Image>
            )}
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.accNameTextDark}>
                  {accountName ? accountName : 'Twitter'}
                </Text>
                {verified ? (
                  <Image
                    style={styles.verified}
                    source={require('./verify.png')}></Image>
                ) : (
                  <Text></Text>
                )}
              </View>
              <Text style={styles.userNameTextDark}>
                @{userName ? userName : 'UserName'}
              </Text>
            </View>
          </View>

          <Image
            style={styles.image}
            source={require('./twitterGrad.png')}></Image>
        </View>
        <View style={styles.textBoxDark}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              letterSpacing: 0.2,
              lineHeight: 20,
            }}>
            {tweet
              ? tweet
              : 'lorem-ipsum.lineIpsum occaecat aute ut Lorem labore duis magna irure sunt id voluptate aliquip eiusmod.'}{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.dateTimeDark}>
            {time ? time : '8:30 PM'}•{date ? date : 'Nov 5, 2023'}
          </Text>
        </View>
        <View style={styles.icons}>
          <Image
            style={styles.bottomIcon}
            source={require('./chat.png')}></Image>
          <Image
            style={styles.bottomIcon}
            source={require('./retweet.png')}></Image>
          {like ? (
            <Image
              style={styles.bottomIcon}
              source={require('./likeFill.png')}></Image>
          ) : (
            <Image
              style={styles.bottomIcon}
              source={require('./like.png')}></Image>
          )}
          <Image
            style={styles.bottomIcon}
            source={require('./upload.png')}></Image>
        </View>
      </View>
    );
  };

  return (
    <View>
      {dark ? (
        <Dark></Dark>
      ) : (
        <View style={styles.card}>
          <View style={styles.horizontal}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {proPicture ? (
                <Image style={styles.proPic} source={proPicture}></Image>
              ) : (
                <Image
                  style={styles.proPic}
                  source={require('./twitter.png')}></Image>
              )}
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.accNameText}>
                    {accountName ? accountName : 'Twitter'}
                  </Text>
                  {verified ? (
                    <Image
                      style={styles.verified}
                      source={require('./verify.png')}></Image>
                  ) : (
                    <Text></Text>
                  )}
                </View>
                <Text style={styles.userNameText}>
                  @{userName ? userName : 'UserName'}
                </Text>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('./twitterGrad.png')}></Image>
          </View>
          <View style={styles.textBox}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                letterSpacing: 0.2,
                lineHeight: 20,
              }}>
              lorem-ipsum.lineIpsum occaecat aute ut Lorem labore duis magna
              irure sunt id voluptate aliquip eiusmod.{' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.dateTime}>
              {time ? time : '8:30 PM'}•{date ? date : 'Nov 5, 2023'}
            </Text>
          </View>
          <View style={styles.icons}>
            <Image
              style={styles.bottomIcon}
              source={require('./chat.png')}></Image>
            <Image
              style={styles.bottomIcon}
              source={require('./retweet.png')}></Image>
            {like ? (
              <Image
                style={styles.bottomIcon}
                source={require('./likeFill.png')}></Image>
            ) : (
              <Image
                style={styles.bottomIcon}
                source={require('./like.png')}></Image>
            )}
            <Image
              style={styles.bottomIcon}
              source={require('./upload.png')}></Image>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 320,
    // height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardDark: {
    width: 320,
    // height: 200,
    backgroundColor: '#16202A',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 0,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'blue'
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  proPic: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 10,
  },
  userNameText: {
    fontWeight: '200',
  },
  accNameText: {
    fontWeight: '700',
  },
  userNameTextDark: {
    fontWeight: '200',
    color: 'white',
  },
  accNameTextDark: {
    fontWeight: '700',
    color: 'white',
  },
  verified: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    borderRadius: 50,
    marginLeft: 5,
  },
  textBox: {
    marginTop: 12,
  },
  textBoxDark: {
    marginTop: 12,
    // color: 'white'
  },
  dateTime: {
    fontWeight: '200',
    fontSize: 10,
    marginTop: 5,
  },
  dateTimeDark: {
    fontWeight: '200',
    fontSize: 10,
    marginTop: 5,
    color: 'white',
  },
  icons: {
    width: 220,
    // backgroundColor: 'blue',
    height: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
});
