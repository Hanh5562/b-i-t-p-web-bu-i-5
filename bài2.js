function showSection(sectionId) {
    // Ẩn tất cả các phần
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hiện phần được chọn
    document.getElementById(sectionId).classList.add('active');
}
