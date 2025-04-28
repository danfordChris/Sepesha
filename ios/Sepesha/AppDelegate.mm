

#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTBridgeModule.h>

#import <Firebase.h>
#import <UserNotifications/UserNotifications.h>
#import <RNCPushNotificationIOS.h>
// import GoogleMaps

//#import <react-native-screenguard/ScreenGuard.h>


@implementation AppDelegate
  
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Sepesha";
  self.initialProps = @{};
  
  [FIRApp configure];
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
  [[UIApplication sharedApplication] setIdleTimerDisabled:YES];

   
// GMSServices.provideAPIKey("AIzaSyCA360n3d4rCFHmtTL1H40YbTlU8fwtzek")
 
 
//  [ScreenGuard enableScreenGuard];

  ///

  // Set up push notifications
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self;
  
  // Register for remote notifications
  [application registerForRemoteNotifications];
  
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

///  Notification Code

-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  completionHandler(UNNotificationPresentationOptionSound | UNNotificationPresentationOptionList | UNNotificationPresentationOptionBanner | UNNotificationPresentationOptionBadge);
}

//- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
//{
//  [RNCPushNotificationIOS didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
//}

-(void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken: (NSData *)deviceToken
{
  [FIRMessaging messaging].APNSToken = deviceToken;
  
  NSString *fcmToken = [FIRMessaging messaging].FCMToken;
  
  NSLog(@"++APNST deviceToken : %@", deviceToken);
  NSLog(@"++FCM device token : %@", fcmToken);
}

// Required for the notification event. You must call the completion handler after handling the remote notification.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  [RNCPushNotificationIOS didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}

// Required for the registrationError event.
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  [RNCPushNotificationIOS didFailToRegisterForRemoteNotificationsWithError:error];
}
// Required for localNotification event
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)(void))completionHandler
{
  [RNCPushNotificationIOS didReceiveNotificationResponse:response];
}

///

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
