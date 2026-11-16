function LibraryStats({ books }) {
    const totalBooks = books.length;
    const availableBooks = books.filter((book) => book.copies > 0).length;

    return (
        <section className="stats">
            <div className="stat-item">
                <span>Total books in catalog:</span>
                <strong>{totalBooks}</strong>
            </div>
            <div className="stat-item">
                <span>Available for checkout:</span>
                <strong>{availableBooks}</strong>
            </div>
        </section>
    );
}

export default LibraryStats;