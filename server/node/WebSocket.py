import cv2
import mediapipe as mp
import asyncio
import websockets
import json


async def transport_with_backend(tong):
    uri = "ws://i8c203.p.ssafy.io:8002"
    # uri = "ws://localhost:8002"
    async with websockets.connect(uri) as websocket:
        tong = json.dumps(tong)
        await websocket.send(tong)


mp_drawing = mp.solutions.drawing_utils
mp_face_mesh = mp.solutions.face_mesh
drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)
camera_id = "/dev/video0"

cap = cv2.VideoCapture(0)

# cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*'YUYV'))
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)

with mp_face_mesh.FaceMesh(
        min_detection_confidence=0.5,
        min_tracking_confidence=0.5) as face_mesh:
    while cap.isOpened():
        success, image = cap.read()
        if not success:
            print("\033[91m" + "Ignoring empty camera frame." + "\033[0m")
            break

        image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        results = face_mesh.process(image)

        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        face_lists = ["nose", "Top", "upperLib", "lowerLib", "leftEye", "Chin", "Cheek2", "Cheek1", "rightEye",
                      "Cheek3"]
        if results.multi_face_landmarks:
            for face_landmark in results.multi_face_landmarks:
                ih, iw, ic = image.shape
                landmarks = list(enumerate(face_landmark.landmark))
                landmarks_tong = {
                    "nose": str(int(landmarks[1][1].x * iw)) + ',' + str(int(landmarks[1][1].y * ih)),
                    "Top": str(int(landmarks[10][1].x * iw)) + ',' + str(int(landmarks[10][1].y * ih)),
                    "upperLib": str(int(landmarks[11][1].x * iw)) + ',' + str(int(landmarks[11][1].y * ih)),
                    "lowerLib": str(int(landmarks[17][1].x * iw)) + ',' + str(int(landmarks[17][1].y * ih)),
                    "leftEye": str(int(landmarks[27][1].x * iw)) + ',' + str(int(landmarks[27][1].y * ih)),
                    "Chin": str(int(landmarks[152][1].x * iw)) + ',' + str(int(landmarks[152][1].y * ih)),
                    "Cheek2": str(int(landmarks[204][1].x * iw)) + ',' + str(int(landmarks[204][1].y * ih)),
                    "Cheek1": str(int(landmarks[207][1].x * iw)) + ',' + str(int(landmarks[207][1].y * ih)),
                    "rightEye": str(int(landmarks[257][1].x * iw)) + ',' + str(int(landmarks[257][1].y * ih)),
                    "Cheek3": str(int(landmarks[434][1].x * iw)) + ',' + str(int(landmarks[434][1].y * ih))
                }
                asyncio.new_event_loop().run_until_complete(transport_with_backend(landmarks_tong))

        cv2.imshow('MediaPipe FaceMesh', image)
        if cv2.waitKey(2) & 0xFF == 27:
            break
cap.release()
