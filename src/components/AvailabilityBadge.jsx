function AvailabilityBadge({ copies }) {
    const isAvailable = copies > 0;

    return (
        <span className={`badge ${isAvailable ? "badge-available" : "badge-unavailable"}`}>
            {isAvailable ? "Available" : "Out of stock"}
        </span>
    );
}

export default AvailabilityBadge;