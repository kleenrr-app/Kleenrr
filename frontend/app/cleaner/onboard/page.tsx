const [plowType, setPlowType] = useState("");
<h3 className="mt-6 font-semibold">Snow Equipment</h3>

<label className="block text-sm mt-2">Plow Type</label>
<select
  required
  value={plowType}
  onChange={(e) => setPlowType(e.target.value)}
  className="w-full p-2 border rounded"
>
  <option value="">Select plow</option>
  <option value="none">None</option>
  <option value="straight">Straight Blade</option>
  <option value="v_plow">V-Plow</option>
  <option value="wing">Expandable / Wing</option>
  <option value="skid">Skid Steer / Tractor</option>
</select>
const payload = {
  name,
  phone,
  vehicleType,
  plowType,
  hasPlow: plowType !== "none"
};
