import { useState } from 'react';
import AdminBreadcrumb from '../../components/admin/AdminBreadcrumb.jsx';
import { MAIN_MENU_ITEMS } from '../../data/adminData.js';

export default function AdminMainMenu() {
  const [items, setItems] = useState(MAIN_MENU_ITEMS);
  const [form, setForm] = useState({ label: '', url: '' });

  const toggleVisible = (id) =>
    setItems((cur) => cur.map((m) => (m.id === id ? { ...m, visible: !m.visible } : m)));

  const remove = (id) => setItems((cur) => cur.filter((m) => m.id !== id));

  const addItem = (e) => {
    e.preventDefault();
    if (!form.label || !form.url) return;
    setItems((cur) => [
      ...cur,
      { id: Date.now(), label: form.label, url: form.url, order: cur.length + 1, visible: true },
    ]);
    setForm({ label: '', url: '' });
  };

  return (
    <>
      <AdminBreadcrumb title="Main Menu" />

      <div className="sb2-2-1">
        <h2>Main Menu Editor</h2>
        <p>Add, edit, reorder, or hide top-level navigation items shown on the public site.</p>
      </div>

      <div className="sb2-2-3">
        <div className="row">
          <div className="col-md-8">
            <div className="box-inn-sp">
              <div className="inn-title">
                <h4>Current Menu Items</h4>
                <p>Toggle visibility or remove items. Drag-and-drop ordering can be added later.</p>
              </div>
              <div className="tab-inn">
                <div className="table-responsive table-desi">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Label</th>
                        <th>URL</th>
                        <th>Order</th>
                        <th>Visible</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((m, idx) => (
                        <tr key={m.id}>
                          <td>{idx + 1}</td>
                          <td>{m.label}</td>
                          <td><code>{m.url}</code></td>
                          <td>{m.order}</td>
                          <td>
                            <span className={`label ${m.visible ? 'label-success' : 'label-default'}`}>
                              {m.visible ? 'Yes' : 'No'}
                            </span>
                          </td>
                          <td>
                            <button type="button" className="btn btn-xs btn-info" onClick={() => toggleVisible(m.id)} style={{ marginRight: 5 }}>
                              {m.visible ? 'Hide' : 'Show'}
                            </button>
                            <button type="button" className="btn btn-xs btn-danger" onClick={() => remove(m.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box-inn-sp">
              <div className="inn-title">
                <h4>Add New Item</h4>
                <p>Append a new entry to the main navigation.</p>
              </div>
              <form onSubmit={addItem} style={{ padding: 15 }}>
                <div className="input-field">
                  <input
                    type="text"
                    value={form.label}
                    onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))}
                    placeholder="Menu label"
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    value={form.url}
                    onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
                    placeholder="/url-path"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Add Menu Item</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
