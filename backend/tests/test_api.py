def test_create_event(client):
    response = client.post(
        "/events",
        json={
            "event_type": "page_view",
            "page_url": "/test"
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert data["event_type"] == "page_view"
    assert data["page_url"] == "/test"

def test_get_events(client):
    # First create an event
    client.post(
        "/events",
        json={
            "event_type": "page_view",
            "page_url": "/test"
        }
    )
    
    response = client.get("/events")
    assert response.status_code == 200
    assert len(response.json()) > 0