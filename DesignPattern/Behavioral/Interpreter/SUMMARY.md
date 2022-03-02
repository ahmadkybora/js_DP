barring simple cases, an interpreter acts in two stage
lexing turns text into a set of tokens, e.g.
3*(4+5) -> lit[3] star lparen lit[4] plus lit[5] rparen
parsing tokens into meaningful constructs 
-> multiplicationExpession[
    integer[3], 
    additionExpression[
        integer[4], integer[5]
    ]
]  
parsed data can then be travesed

به جز موارد ساده، یک مترجم در دو مرحله عمل می کند
lexing متن را به مجموعه ای از نشانه ها تبدیل می کند، به عنوان مثال.
3*(4+5) -> روشن[3] ستاره lparen روشن[4] به علاوه روشن[5] rparen
تجزیه توکن ها به سازه های معنادار
-> multiplicationExpesion[
    عدد صحیح [3]،
    افزودن بیان[
        عدد صحیح[4]، عدد صحیح[5]
    ]
]
سپس داده های تجزیه شده را می توان انتقال داد