import Card from "./Card";
import AvailabilityBadge from "./AvailabilityBadge";

function BookCard({ book }) {
    const { title, author, year, genre, copies } = book;

    return (
        <Card>
            <div className="card-header">
                <h3 className="book-title">{title}</h3>
                {year < 2000 && (
                    <span className="classic-tag">Classic Edition</span>
                )}
            </div>

            <div className="card-body">
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Publication Year:</strong> {year}</p>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Available Copies:</strong> {copies}</p>
            </div>

            <div className="card-footer">
                <AvailabilityBadge copies={copies} />
            </div>
        </Card>
    );
}

export default BookCard;