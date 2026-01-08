const NewIssueForm = ({ handleSubmit, user }) => {
  return (
    <div className="card bg-base-100 rounded-[3rem] border border-base-200 shadow-sm max-w-4xl mx-auto overflow-hidden">
      <div className="card-body p-8 md:p-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary">
          {/* Issue Title */}
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text font-bold">Issue Title</span></label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Large garbage pile near West Park entrance"
              className="input input-bordered input-lg w-full rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="form-control">
            <label className="label"><span className="label-text font-bold">Category</span></label>
            <select
              name="category"
              className="select select-bordered select-lg w-full rounded-2xl focus:select-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
            >
              <option>Garbage</option>
              <option>Illegal Construction</option>
              <option>Broken Public Property</option>
              <option>Road Damage</option>
            </select>
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label"><span className="label-text font-bold">Location</span></label>
            <input
              type="text"
              name="location"
              placeholder="e.g. 123 Street, City Name"
              className="input input-bordered input-lg w-full rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
              required
            />
          </div>

          {/* Image URL */}
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text font-bold">Image URL</span></label>
            <input
              type="text"
              name="image"
              placeholder="https://images.unsplash.com/..."
              className="input input-bordered input-lg w-full rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text font-bold">Detailed Description</span></label>
            <textarea
              name="description"
              placeholder="Please provide details about the issue..."
              className="textarea textarea-bordered textarea-lg w-full rounded-2xl focus:textarea-primary min-h-[150px] bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
              required
            ></textarea>
          </div>

          {/* Status (Read Only) */}
          <div className="form-control">
            <label className="label"><span className="label-text font-bold">Reporting Status</span></label>
            <input
              type="text"
              name="status"
              value={"Ongoing"}
              readOnly
              className="input input-bordered input-lg w-full rounded-2xl bg-base-200/80 border-transparent font-black text-primary uppercase tracking-widest text-xs"
            />
          </div>

          {/* Points/Amount */}
          <div className="form-control">
            <label className="label"><span className="label-text font-bold">Estimated Work Multiplier</span></label>
            <input
              type="number"
              name="amount"
              defaultValue={500}
              className="input input-bordered input-lg w-full rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
            />
          </div>

          {/* Meta Info (Read Only) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60">
              <div className="form-control">
                <label className="label text-[10px] uppercase font-black tracking-widest">Reporting Date</label>
                <input
                    type="text"
                    name="date"
                    value={new Date().toLocaleDateString()}
                    readOnly
                    className="input input-ghost font-bold"
                />
              </div>
              <div className="form-control text-right">
                <label className="label text-[10px] uppercase font-black tracking-widest justify-end">Reporter Email</label>
                <input
                    type="email"
                    name="email"
                    value={user?.email}
                    readOnly
                    className="input input-ghost text-right font-bold"
                />
              </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-6">
            <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 font-black tracking-tight group">
              Submit Issue Report
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewIssueForm;
