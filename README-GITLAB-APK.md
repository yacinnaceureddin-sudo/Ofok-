# بناء تطبيق أفق APK عبر GitLab

## رفع الملفات
1. فك ضغط أرشيف المشروع.
2. ارفع **محتويات المجلد** إلى جذر مستودع GitLab، وليس ملف ZIP وحده.
3. تأكد أن `.gitlab-ci.yml` ظاهر في جذر المستودع بجانب `package.json` و`package-lock.json` ومجلد `www`.
4. نفّذ Commit للملفات.

## تشغيل البناء
- افتح المستودع في GitLab ثم Build > Pipelines.
- انتظر انتهاء مهمة `build_android_apk`.
- عند نجاحها افتح صفحة الـ Pipeline ثم Job ثم قسم Job artifacts واضغط Download.
- داخل الأرشيف الناتج ستجد `app-debug.apk`.

## ملاحظات
- هذا ينتج Debug APK للتجربة والتثبيت اليدوي، وليس إصداراً نهائياً منشوراً على Google Play.
- يحتاج GitLab Runner إلى السماح بتنفيذ jobs واستخدام Docker executor أو بيئة تدعم image.
- يجب أن يكون اتصال الإنترنت متاحاً أثناء البناء لتنزيل Android SDK وGradle dependencies.
- لا يحتوي المشروع على Backend أو دفع حقيقي؛ بناء APK لا يضيف هذه الخدمات تلقائياً.
