// تحديد العناصر
const toggleMenu = document.querySelector('.toggle-menu'); // أيقونة الهامبرغر
const navMenu = document.querySelector('nav ul'); // قائمة الروابط داخل الـ nav

// عند النقر على زر الهامبرغر
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu'); // إضافة/إزالة الفئة show-menu لعرض/إخفاء القائمة
});
