import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define the styles for your PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello, this is your PDF content.</Text>
      </View>
    </Page>
  </Document>
);

const GeneratePDFButton = () => (
  <div className=' bor'>
    <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default GeneratePDFButton;
