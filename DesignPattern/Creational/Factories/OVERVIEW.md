Motivation
object creation logic becomes too convoluted
initilizer is not descriptive
name is always __init__
cannot overload with same sets of arguments with diffrent names
can turn into optional parameter hell
wholesale object creation(non-piecewise, unlike builder) can be outsourced to 
a separate method (factory method) 
that may exist in a separate class (factory)
can create hierrchy of factories with Abstract Factory

factory a component responsible solely for the wholesale (not picewise) cretion of object


انگیزه
منطق ایجاد شی بیش از حد پیچیده می شود
آغازگر توصیفی نیست
نام همیشه __init__ است
نمی‌تواند با مجموعه‌های مشابهی از آرگومان‌ها با نام‌های متفاوت بارگذاری شود
می تواند به جهنم پارامتر اختیاری تبدیل شود
ایجاد اشیاء عمده فروشی (غیر تکه ای، بر خلاف سازنده) می تواند برون سپاری شود
روش جداگانه (روش کارخانه)
که ممکن است در یک کلاس جداگانه (کارخانه) وجود داشته باشد
می تواند سلسله مراتبی از کارخانه ها را با Abstract Factory ایجاد کند

کارخانه قطعه ای است که صرفاً مسئول تولید عمده (نه به صورت تکه ای) شی است