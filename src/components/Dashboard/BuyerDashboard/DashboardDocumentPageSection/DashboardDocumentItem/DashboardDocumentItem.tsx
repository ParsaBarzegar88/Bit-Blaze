"use client";

import React, { useRef, useEffect, useState, useMemo, FC } from "react";
import { Trash2, Download } from "lucide-react";
import { IHousesDetail } from "@/core/types/HouseReserveDetail/IHousesDetail";
import { IUserDetail } from "@/core/types/Dashboard/IDashboard";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  pdf,
} from "@react-pdf/renderer";
import { toJalaali } from "jalaali-js";

Font.register({
  family: "IranSans",
  src: "/PDFFonts/IRANSansXFaNum-Medium.ttf",
});

const toPersianDate = (date: Date): string => {
  const j = toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return `${j.jy}/${String(j.jm).padStart(2, "0")}/${String(j.jd).padStart(
    2,
    "0"
  )}`;
};
const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: "IranSans", fontSize: 12, lineHeight: 1.5 },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  section: {
    marginBottom: 15,
    flexDirection: "row",
    gap: "16px",
    width: "100%",
    justifyContent: "space-between",
    textAlign: "right",
  },
  sectionItem: {
    flexDirection: "column",
    gap: "6px",
    width: "100%",
    textAlign: "right",
  },
  signatureSection: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  signatureBox: { width: "45%", alignItems: "center", padding: 10, height: 80 },
  signatureImage: { width: 150, height: 50, marginTop: 5 },
  signatureText: { fontSize: 10, marginTop: 5 },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 10,
    color: "#666",
  },
});

interface IProps {
  houseDetail: IHousesDetail;
  userDetail: IUserDetail;
}
const QolnamehPDF = ({
  houseDetail,
  userDetail,
  today,
  buyerSignature,
}: any) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.header}>
        <Text>امضای دو طرفین قرارداد</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <View>
            <Text>
              نام و نام خانوداگی :{" "}
              {userDetail.user.firstName + " " + userDetail.user.lastName}
            </Text>
          </View>
          <View>
            <Text>کد ملی : {userDetail.user.id}3345334</Text>
          </View>
          <View>
            <Text>تاریخ : {toPersianDate(today)}</Text>
          </View>
        </View>
        <View style={styles.sectionItem}>
          <View>
            <Text>
              نام و نام خانوداگی :{" "}
              {houseDetail.sellerName}
            </Text>
          </View>
          <View>
            <Text>کد ملی : {houseDetail.sellerId}3345334</Text>
          </View>
          <View>
            <Text>تاریخ : {toPersianDate(today)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.signatureSection}>
        <View style={styles.signatureBox}>
          <Text style={{ fontSize: 14, marginBottom: 5 }}>امضای فروشنده</Text>
          <Text>
            <Image
              style={styles.signatureImage}
              src={"/assets/Dashboard/fakeSig.jpg"}
            />
          </Text>
        </View>
        <View style={styles.signatureBox}>
          <Text style={{ fontSize: 14, marginBottom: 5 }}>امضای خریدار</Text>
          {buyerSignature ? (
            <Image style={styles.signatureImage} src={buyerSignature} />
          ) : (
            <Text>امضا موجود نیست</Text>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <Text>
          این سند به صورت الکترونیکی پیاده شده و دارای جنبه قانونی می باشد
        </Text>
      </View>
    </Page>
  </Document>
);

const DashboardDocumentItem: FC<IProps> = ({ houseDetail, userDetail }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const { contractCode, today } = useMemo(() => {
    const code = Math.floor(10000 + Math.random() * 90000).toString();
    const now = new Date();
    return { contractCode: code, today: now };
  }, []);

  const lineColor = "#000000";
  const lineWidth = 6;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const setupContext = () => {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
    };
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = rect.width;
      canvas.height = rect.height;
      setupContext();
      ctx.putImageData(imageData, 0, 0);
    };
    setupContext();
    setContext(ctx);
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const getPoint = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e)
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDrawing = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!context) return;
    setIsDrawing(true);
    const point = getPoint(e);
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const draw = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing || !context) return;
    const point = getPoint(e);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    if (!context || !canvasRef.current) return;
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const generateAndSendPDF = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const sig = canvas.toDataURL("image/png");
    const doc = (
      <QolnamehPDF
        houseDetail={houseDetail}
        userDetail={userDetail}
        contractCode={contractCode}
        today={today}
        buyerSignature={sig}
      />
    );
    const blob = await pdf(doc).toBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `document-${contractCode}.pdf`;
    link.click();
    const formData = new FormData();
    formData.append("file", blob, `document-${contractCode}.pdf`);
    formData.append("contractCode", contractCode);
    // await fetch("/api/upload-contract", { method: "POST", body: formData });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-extrabold text-center mb-1 text-gray-800">
        سیستم ثبت امضای دیجیتال
      </h3>
      <p className="text-gray-600 text-center mb-3 font-mono text-lg">
        قولنامه شماره : {contractCode}/{today.getFullYear()}
      </p>
      <div className="flex flex-row justify-between w-full gap-5 mb-4">
        <div className="w-full flex flex-col gap-2 bg-[#f0f0f0] px-3 py-3 rounded-lg">
          <h4 className="text-purple-700">اطلاعات فروشنده</h4>
          <div className="flex flex-col gap-1">
            <div className="text-[16px] font-bold">
              نام فروشنده :{" "}
              <span className="text-[16px] font-[500]">
                {" "}
                {houseDetail.sellerName}
              </span>
            </div>
            <div className="text-[16px] font-bold">
              کد ملی فروشنده :{" "}
              <span className="text-[16px] font-[500]">
                {" "}
                {houseDetail.sellerId}3345633
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 bg-[#f0f0f0] px-3 py-3 rounded-lg">
          <h4 className="text-purple-700">اطلاعات خریدار</h4>
          <div className="flex flex-col gap-1">
            <div className="text-[16px] font-bold">
              نام خریدار :{" "}
              <span className="text-[16px] font-[500]">
                {" "}
                {userDetail.user.firstName + " " + userDetail.user.lastName}
              </span>
            </div>
            <div className="text-[16px] font-bold">
              کد ملی خریدار :{" "}
              <span className="text-[16px] font-[500]">
                {" "}
                {userDetail.user.id}3345633
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-60 border-2 border-gray-300 rounded-lg cursor-crosshair bg-gray-50 touch-none shadow-sm"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        <p className="text-xs text-gray-500 mt-2 text-center">
          با موس یا انگشت امضا کنید
        </p>
      </div>
      <div className="flex gap-3 mt-6 justify-between">
        <button
          onClick={clearCanvas}
          className="flex items-center gap-2 rounded-lg px-4 py-2 bg-red-500 hover:bg-red-600 text-white transition-colors"
        >
          <Trash2 className="w-4 h-4" /> پاک کردن
        </button>
        <button
          onClick={generateAndSendPDF}
          className="flex items-center gap-2 rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          <Download className="w-4 h-4" /> تایید و ایجاد قولنامه
        </button>
      </div>
    </div>
  );
};

export default DashboardDocumentItem;
