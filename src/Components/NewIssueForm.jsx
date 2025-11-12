const NewIssueForm = ({ handleSubmit, user }) => {
  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Issue Title */}
          <div>
            <label className="label">Issue Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label">Category</label>
            <select
              name="category"
              className="select select-bordered w-full bg-white dark:bg-base-100"
            >
              <option>Garbage</option>
              <option>Illegal Construction</option>
              <option>Broken Public Property</option>
              <option>Road Damage</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="label">Amount</label>
            <input
              type="number"
              name="amount"
              defaultValue={500}
              className="input input-bordered w-full"
            />
          </div>

          {/* Status */}
          <div>
            <label className="label">Status</label>
            <input
              type="text"
              name="status"
              value={"ongoing"}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>

          {/* Date */}
          <div>
            <label className="label">Date</label>
            <input
              type="text"
              name="date"
              value={new Date().toLocaleDateString()}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>

          {/* Submit Button */}
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              Submit Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewIssueForm;
